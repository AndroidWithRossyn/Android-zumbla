package com.game;

import android.app.Activity;
import android.content.SharedPreferences;
import androidx.preference.PreferenceManager;

import androidx.annotation.Nullable;

import com.google.android.ump.ConsentForm;
import com.google.android.ump.ConsentInformation;
import com.google.android.ump.ConsentRequestParameters;
import com.google.android.ump.FormError;
import com.google.android.ump.UserMessagingPlatform;

public class Gdpr {
    private String TAG = "Gradle";
    private Boolean under_age = false;
    private ConsentInformation consentInformation;
    private ConsentForm consentForm;
    private Activity activity;


    public void make(Activity activity){
        if(!activity.getResources().getBoolean(R.bool.enable_gdpr)){
            return;
        }
        // Here is GDPR  :
        //================
        this.activity = activity;

        SharedPreferences sharedPreferences = PreferenceManager.getDefaultSharedPreferences(this.activity);

        if (sharedPreferences.getBoolean("already_viewed_gdpr", false)){
            return;
        }

        under_age = activity.getResources().getBoolean(R.bool.under_age);

        this.activity.setContentView(R.layout.activity_main);
        // Set tag for underage of consent. false means users are not underage.
        ConsentRequestParameters params = new ConsentRequestParameters
                .Builder()
                .setTagForUnderAgeOfConsent(under_age)
                .build();

        consentInformation = UserMessagingPlatform.getConsentInformation(activity);
        consentInformation.requestConsentInfoUpdate(
                activity,
                params,
                new ConsentInformation.OnConsentInfoUpdateSuccessListener() {
                    @Override
                    public void onConsentInfoUpdateSuccess() {
                        // The consent information state was updated.
                        // You are now ready to check if a form is available.
                        if (consentInformation.isConsentFormAvailable()) {
                            loadForm();
                        }
                    }
                },
                new ConsentInformation.OnConsentInfoUpdateFailureListener() {
                    @Override
                    public void onConsentInfoUpdateFailure(FormError formError) {
                        // Handle the error.
                    }
                });

    }

    public void loadForm() {
        UserMessagingPlatform.loadConsentForm(
                activity,
                new UserMessagingPlatform.OnConsentFormLoadSuccessListener() {
                    @Override
                    public void onConsentFormLoadSuccess(ConsentForm consentForm) {
                        Gdpr.this.consentForm = consentForm;
                        if(consentInformation.getConsentStatus() == ConsentInformation.ConsentStatus.REQUIRED) {
                            consentForm.show(
                                    activity,
                                    new ConsentForm.OnConsentFormDismissedListener() {
                                        @Override
                                        public void onConsentFormDismissed(@Nullable FormError formError) {
                                            // Handle dismissal by reloading form.
                                            loadForm();
                                        }
                                    });

                            SharedPreferences.Editor sharedPreferencesEditor =
                                    PreferenceManager.getDefaultSharedPreferences(activity).edit();
                            sharedPreferencesEditor.putBoolean("already_viewed_gdpr", true);
                            sharedPreferencesEditor.apply();

                        }

                    }
                },
                new UserMessagingPlatform.OnConsentFormLoadFailureListener() {
                    @Override
                    public void onConsentFormLoadFailure(FormError formError) {
                        // Handle the error
                    }
                }
        );
    }

}
