package com.game;

import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import java.io.IOException;
import java.io.InputStream;

public class PrivacyActivity extends AppCompatActivity {
    private TextView textview_privacy_policy;
    private String str;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.privacy_policy);
        textview_privacy_policy = findViewById(R.id.textview_privacy_policy);

        if (getSupportActionBar() != null)
            getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        try {
            InputStream is = getAssets().open("privarcypolicy.txt");

            // We guarantee that the available method returns the total
            // size of the asset...  of course, this does mean that a single
            // asset can't be more than 2 gigs.
            int size = is.available();

            // Read the entire asset into a local byte buffer.
            byte[] buffer = new byte[size];
            is.read(buffer);
            is.close();

            // Convert the buffer into a string.
            str = new String(buffer);

            str += "<p><strong>"+getResources().getString(R.string.privacy_email)+"</strong></p>";

            // Finally stick the string into the text view.
            // Replace with whatever you need to have the text into.

            //Log.d("text", str);

        } catch (IOException e) {
            // Should never happen!
            throw new RuntimeException(e);
        }

        textview_privacy_policy.setText(UtilsManager.extractHtml(str));
    }

    @Override
    public boolean onSupportNavigateUp() {
        onBackPressed();
        return true;
    }

    @Override
    public void onPause() {
        super.onPause();
    }

    @Override
    public void onResume() {
        super.onResume();
    }

    /** Called before the activity is destroyed */
    @Override
    public void onDestroy() {
        super.onDestroy();
    }

}