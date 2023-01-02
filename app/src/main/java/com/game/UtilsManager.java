package com.game;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.CountDownTimer;
import android.provider.Settings;
import android.text.Html;
import android.text.SpannableString;
import android.text.Spanned;
import android.util.Log;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.Toast;

import static java.lang.Thread.sleep;


public class UtilsManager extends UtilsAdmob {
    private CountDownTimer splashTimer = null;

    public UtilsManager(Activity activity) {
        setContext(activity);
    }

    public String action(String query){
        String[] action = query.split("\\|");
        switch (action[0]){
            case "show_splash":
                splash(true);
                break;
            case "hide_splash":
                splash(false);
                break;
            case "show_privacy":
                Intent myIntent = new Intent(activity, PrivacyActivity.class);
                activity.startActivity(myIntent);
                break;
            case "go_back":
                go_back();
                break;
            case "show_toast":
                showToast(action[1], activity);
                break;

            case "exit_game":
                exit_game();
                break;
            case "show_more":
                more_games();
                break;
            case "show_rate":
                rate();
                break;
            case "show_share":
                share();
                break;
        }
        return "ok";
    }

    @SuppressWarnings("deprecation")
    public static Spanned extractHtml(String html){
        if(html == null){
            // return an empty spannable if the html is null
            return new SpannableString("");
        }else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            return Html.fromHtml(html, Html.FROM_HTML_MODE_LEGACY);
        } else {
            return Html.fromHtml(html);
        }
    }

    public void showToast(String toast, Context context) {
        Toast.makeText(context, toast, Toast.LENGTH_SHORT).show();
    }

    @SuppressWarnings( "deprecation" )
    private void share(){
        Intent shareIntent = new Intent(Intent.ACTION_SEND);
        shareIntent.setType("text/plain");
        shareIntent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET);
        shareIntent.putExtra(Intent.EXTRA_TEXT,
                activity.getResources().getString(R.string.app_name)+"\n" +
                        R.string.share_description + "\n"+
                        "https://play.google.com/store/apps/details?id=" + activity.getApplication().getPackageName()
        );
        activity.startActivity(Intent.createChooser(shareIntent,"Share..."));
    }

    private void rate(){
        Uri uri = Uri.parse("market://details?id=" + activity.getApplication().getPackageName());
        Intent goToMarket = new Intent(Intent.ACTION_VIEW, uri);
        // To count with Play market backstack, After pressing back button,
        // to taken back to our application, we need to add following flags to intent.
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            goToMarket.addFlags(Intent.FLAG_ACTIVITY_NO_HISTORY |
                    Intent.FLAG_ACTIVITY_NEW_DOCUMENT |
                    Intent.FLAG_ACTIVITY_MULTIPLE_TASK);
        }
        try {
            activity.startActivity(goToMarket);
        } catch (ActivityNotFoundException e) {
            activity.startActivity(new Intent(Intent.ACTION_VIEW,
                    Uri.parse("https://play.google.com/store/apps/details?id=" + activity.getApplication().getPackageName())));
        }
    }

    private  void more_games(){
        try {
            activity.startActivity(new Intent(Intent.ACTION_VIEW,
                    Uri.parse("https://play.google.com/store/apps/details?id=" + activity.getApplication().getPackageName())));
        }
        catch (Exception e){
            Log.d("Jacob", "More Games Exception");
        }
    }

    private void exit_game(){
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.d("Jacob_mlk", "Confirmation Exit the game <<<");
                activity.onBackPressed();
            }
        });
    }

    public void splash(Boolean visible){
       LinearLayout main = activity.findViewById(R.id.main);

        if(splashTimer!=null){
            splashTimer.cancel();
            splashTimer = null;
        }

        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if(visible) {
                    main.setVisibility(View.GONE);

                    long delay = activity.getResources().getInteger(R.integer.splash_delay);
                    splashTimer = new CountDownTimer(delay, 1000) {
                        public void onTick(long millisUntilFinished) { }

                        public void onFinish() {
                            main.setVisibility(View.VISIBLE);
                        }
                    }.start();
                }
                else{
                    main.setVisibility(View.VISIBLE);
                }
            }
        });
    }

    public void go_back(){
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.d("Jacob_mlk", "Go to the main menu ... <<<");
                activity.onBackPressed();
            }
        });
    }

}
