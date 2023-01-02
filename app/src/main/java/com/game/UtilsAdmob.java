package com.game;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.ConnectivityManager;
import android.os.Bundle;
import androidx.preference.PreferenceManager;
import android.provider.Settings;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.Display;
import android.view.View;
import android.widget.LinearLayout;

import androidx.annotation.NonNull;

import com.google.ads.mediation.admob.AdMobAdapter;
import com.google.android.gms.ads.AdError;
import com.google.android.gms.ads.AdListener;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.RequestConfiguration;
import com.google.android.gms.ads.interstitial.InterstitialAd;
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback;

import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.initialization.InitializationStatus;
import com.google.android.gms.ads.initialization.OnInitializationCompleteListener;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public class UtilsAdmob {
    protected Boolean is_testing = false;
    protected Boolean enable_banner = true;
    protected Boolean enable_inter  = true;
    protected Boolean banner_at_bottom = true;
    protected Boolean banner_not_overlap = false;
    protected AdView mAdView = null;
    protected Activity activity;
    protected InterstitialAd mInterstitialAd = null;

    public void setContext(Activity act){
        activity = act;
    }

    public void init(){
        is_testing = activity.getResources().getBoolean(R.bool.is_testing);
        enable_banner = activity.getResources().getBoolean(R.bool.enable_banner);
        banner_at_bottom = activity.getResources().getBoolean(R.bool.banner_at_bottom);
        banner_not_overlap = activity.getResources().getBoolean(R.bool.banner_not_overlap);
        enable_inter  = activity.getResources().getBoolean(R.bool.enable_inter);


        if(!isConnectionAvailable()){
            enable_banner = false;
            enable_inter  = false;
        }

        if(!enable_banner && !enable_inter){
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    Log.d("Jacob_mlk", "hide space of banner");
                    AdView banner = activity.findViewById(R.id.adView);
                    banner.setVisibility(View.GONE);
                }
            });
            return;
        }

        if(is_testing) {
            @SuppressLint("HardwareIds")
            String android_id = Settings.Secure.getString(activity.getContentResolver(), Settings.Secure.ANDROID_ID);
            String deviceId = md5(android_id).toUpperCase();
            Log.d("device_id", "DEVICE ID : " + deviceId);
            List<String> testDevices = new ArrayList<>();
            testDevices.add(AdRequest.DEVICE_ID_EMULATOR);
            testDevices.add(deviceId);

            RequestConfiguration requestConfiguration = new RequestConfiguration.Builder()
                    .setTestDeviceIds(testDevices)
                    .build();
            MobileAds.setRequestConfiguration(requestConfiguration);
        }

        MobileAds.initialize(activity, new OnInitializationCompleteListener() {
            @Override
            public void onInitializationComplete(InitializationStatus initializationStatus) {
            }
        });
        prepare_banner();
        prepare_inter();
    }

    protected void prepare_banner(){
        if(!enable_banner) return;

        mAdView = activity.findViewById(R.id.adView);
        /*
        //Set the adaptive ad size on the ad view:
        AdSize adSize = getAdSize();
        mAdView.setAdSize(adSize);
        */
        if(!banner_at_bottom){
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    Log.d("Jacob_mlk", "move banner to top");
                    LinearLayout main = activity.findViewById(R.id.main);
                    AdView banner = activity.findViewById(R.id.adView);
                    main.removeViewAt(1);
                    main.addView(banner, 0);
                }
            });
        }

        if(!banner_not_overlap){
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    Log.d("Jacob_mlk", "set banner overlap");
                    AdView banner = activity.findViewById(R.id.adView);
                    LinearLayout.LayoutParams params = (LinearLayout.LayoutParams) banner.getLayoutParams();
                    params.setMargins(0, -140,0,0);
                }
            });
        }

        Bundle extras = new Bundle();
        extras.putString("npa", gdpr_personalized_ads());

        AdRequest adRequest = new AdRequest.Builder().addNetworkExtrasBundle(AdMobAdapter.class, extras).build();
        mAdView.loadAd(adRequest);

        mAdView.setAdListener(new AdListener() {
            @Override
            public void onAdLoaded() {
                // Code to be executed when an ad finishes loading.
            }

            @Override
            public void onAdFailedToLoad(LoadAdError adError) {
                // Code to be executed when an ad request fails.
                Log.d("Jacob", "Error load banner : "+ adError.getMessage());
            }

            @Override
            public void onAdOpened() {
                // Code to be executed when an ad opens an overlay that
                // covers the screen.
            }

            @Override
            public void onAdClicked() {
                // Code to be executed when the user clicks on an ad.
            }

            @Override
            public void onAdClosed() {
                // Code to be executed when the user is about to return
                // to the app after tapping on an ad.
            }
        });
    }

    /*
    private AdSize getAdSize() {
        // Step 2 - Determine the screen width (less decorations) to use for the ad width.
        Display display = activity.getWindowManager().getDefaultDisplay();
        DisplayMetrics outMetrics = new DisplayMetrics();
        display.getMetrics(outMetrics);

        float widthPixels = outMetrics.widthPixels;
        float density = outMetrics.density;

        int adWidth = (int) (widthPixels / density);

        // Step 3 - Get adaptive ad size and return for setting on the ad view.
        return AdSize.getCurrentOrientationAnchoredAdaptiveBannerAdSize(activity, adWidth);
    }
    */
    protected void prepare_inter(){
        if(!enable_inter) return;

        Bundle extras = new Bundle();
        extras.putString("npa", gdpr_personalized_ads());

        AdRequest adRequest = new AdRequest.Builder().addNetworkExtrasBundle(AdMobAdapter.class, extras).build();
        //AdRequest adRequest = new AdRequest.Builder().build();

        InterstitialAd.load(activity,activity.getResources().getString(R.string.id_inter), adRequest, new InterstitialAdLoadCallback() {
            @Override
            public void onAdLoaded(@NonNull InterstitialAd interstitialAd) {
                // The mInterstitialAd reference will be null until
                // an ad is loaded.
                mInterstitialAd = interstitialAd;
                Log.i("Jacob", "onAdLoaded");
                mInterstitialAd.setFullScreenContentCallback(new FullScreenContentCallback(){
                    @Override
                    public void onAdDismissedFullScreenContent() {
                        // Called when fullscreen content is dismissed.
                        Log.d("Jacob", "The ad was dismissed.");
                        prepare_inter();
                    }

                    @Override
                    public void onAdFailedToShowFullScreenContent(AdError adError) {
                        // Called when fullscreen content failed to show.
                        Log.d("Jacob", "The ad failed to show.");
                    }

                    @Override
                    public void onAdShowedFullScreenContent() {
                        // Called when fullscreen content is shown.
                        // Make sure to set your reference to null so you don't
                        // show it a second time.
                        mInterstitialAd = null;
                        Log.d("Jacob", "The ad was shown.");
                    }
                });
            }

            @Override
            public void onAdFailedToLoad(@NonNull LoadAdError loadAdError) {
                // Handle the error
                Log.i("Jacob", loadAdError.getMessage());
                mInterstitialAd = null;
            }
        });
    }

    public void show_inter(){
        if(!enable_inter) return;

        if (mInterstitialAd == null) {
            Log.d("Jacob", "The interstitial wasn't loaded yet.");
            return;
        }

        Log.d("Jacob", "inter is loaded ...");
        mInterstitialAd.show(activity);
    }

    public void on_pause(){
        if (mAdView != null) {
            if(enable_banner){
                mAdView.pause();
            }
        }
    }

    public void on_resume(){
        if (mAdView != null) {
            if(enable_banner){
                mAdView.resume();
            }
        }
    }

    public void on_destroy(){
        if (mAdView != null) {
            if(enable_banner) {
                mAdView.destroy();
            }
        }
    }

    @SuppressWarnings( "deprecation" )
    public boolean isConnectionAvailable(){
        ConnectivityManager cm = (ConnectivityManager) activity.getSystemService(Context.CONNECTIVITY_SERVICE);
        return ( cm.getActiveNetworkInfo() != null && cm.getActiveNetworkInfo().isConnectedOrConnecting() );
    }

    public String md5(String s) {
        try {
            // Create MD5 Hash
            MessageDigest digest = java.security.MessageDigest.getInstance("MD5");
            digest.update(s.getBytes());
            byte messageDigest[] = digest.digest();

            // Create Hex String
            StringBuffer hexString = new StringBuffer();
            for (int i=0; i<messageDigest.length; i++)
                hexString.append(Integer.toHexString(0xFF & messageDigest[i]));
            return hexString.toString();

        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return "";
    }

    public void disable_sounds(boolean val){
        MobileAds.setAppMuted(val);
    }

    public String gdpr_personalized_ads() {
        if(!activity.getResources().getBoolean(R.bool.enable_gdpr)){
            return "0";
        }

        SharedPreferences sharedPreferences = PreferenceManager.getDefaultSharedPreferences(this.activity);
        return sharedPreferences.getString("IABTCF_VendorConsents", "0");
    }
}
