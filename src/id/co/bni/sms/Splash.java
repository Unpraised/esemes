package id.co.bni.sms;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;

public class Splash extends Activity {

	final long DELAY = 3000;
	Runnable stopSplashRunnable = new Runnable() {

		public void run() {
			Intent intent = new Intent(getApplicationContext(),
					MainActivity.class);
			startActivity(intent);
			Splash.this.finish();
		}
	};

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.splash);

		Handler handler = new Handler();
		handler.postDelayed(stopSplashRunnable, DELAY);
	}
}
