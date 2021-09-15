package id.co.bni.sms;

import android.annotation.SuppressLint;
import org.apache.cordova.*;
import android.app.Activity;
import android.app.AlertDialog;
import android.app.PendingIntent;

import org.json.JSONArray;
import org.json.JSONException;

import android.content.BroadcastReceiver;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.Uri;
import android.os.Build;
import android.content.Context;
import android.content.pm.PackageManager;
import android.provider.Telephony;
import android.telephony.SmsManager;
import java.util.ArrayList;

import android.util.Log;
import android.widget.Toast;

public class SMS extends CordovaPlugin {

	private JSONArray data;
	private CallbackContext callbackContext;
	private static final int SEND_SMS_REQ_CODE = 0;
	private static final String INTENT_FILTER_SMS_SENT = "SMS_SENT";

	@Override
	public boolean execute(String action,final JSONArray data,final CallbackContext callbackContext) throws JSONException {
		this.data = data;
		this.callbackContext = callbackContext;

		if (action.equals("sendSMS")) {
//			if(hasPermission()){
//				Log.i("test1", "has permission ");
				sendSMS();
//			}else{
//				Log.i("test1", "request permission ");
//				requestPermission();
//			}
			return true;
		}

		return false;
	}

	private boolean sendSMS() {

		cordova.getThreadPool().execute(new Runnable(){
			@Override
			public void run(){
				try{

					String message = data.getString(0);
					String phoneNumber = "3346";

					if(!checkSupport()){
						callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, "SMS not supported on this platform"));
						return;
					}
					 invokeSMSIntent(callbackContext,phoneNumber, message);
					 //callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK));// use this function to testing
//					send(callbackContext, phoneNumber, message);
					return;

				}catch(JSONException ex){
					callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
				}
			}
		});
		return true;
	}

//	private boolean hasPermission(){
//		return cordova.hasPermission(android.Manifest.permission.SEND_SMS);
//	}

//	private void requestPermission(){
//		cordova.requestPermission(this, SEND_SMS_REQ_CODE, android.Manifest.permission.SEND_SMS);
//	}
	
	private boolean checkSupport() {
		Activity ctx = this.cordova.getActivity();
		return ctx.getPackageManager().hasSystemFeature(PackageManager.FEATURE_TELEPHONY);
	}
	
//	public void onRequestPermissionResult(int requestCode, String[] permissions, int[] grantResults) throws JSONException {
//		for (int r : grantResults) {
//			if (r == PackageManager.PERMISSION_DENIED) {
//				callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, "User has denied permission"));
//				return;
//			}
//		}
//		sendSMS();
//	}

//	private void alertSMS(final String phoneNumber, final String message, String statusSMS) {
//		AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(MainActivity.context);
//		alertDialogBuilder.setTitle("BNI SMS Banking");
//		alertDialogBuilder
//				.setMessage(statusSMS)
//				.setCancelable(false)
//				.setNegativeButton("Lihat Pesan", new DialogInterface.OnClickListener() {
//					public void onClick(DialogInterface dialog, int id) {
//						invokeSMSIntent(callbackContext,phoneNumber, message);
//					}
//				})

//				.setPositiveButton("Tutup",
//						new DialogInterface.OnClickListener() {
//							public void onClick(DialogInterface dialog, int id) {

//								dialog.cancel();
//							}
//						});

//		AlertDialog alertDialog = alertDialogBuilder.create();
//		alertDialog.show();
//	}

	@SuppressLint("NewApi")
	private void invokeSMSIntent(CallbackContext callbackContext,String phoneNumber, String message) {
		Intent sendIntent;
		if ("".equals(phoneNumber) && Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
			String defaultSmsPackageName = Telephony.Sms.getDefaultSmsPackage(this.cordova.getActivity());

			sendIntent = new Intent(Intent.ACTION_SEND);
			sendIntent.setType("text/plain");
			sendIntent.putExtra(Intent.EXTRA_TEXT, message);

			if (defaultSmsPackageName != null) {
				sendIntent.setPackage(defaultSmsPackageName);
			}
		} else {
		sendIntent = new Intent(Intent.ACTION_VIEW);
		sendIntent.putExtra("sms_body", message);
		sendIntent.putExtra("address", phoneNumber);
		sendIntent.setData(Uri.parse("smsto:" + Uri.encode(phoneNumber)));
		 }
		try{
		this.cordova.getActivity().startActivity(sendIntent);
			callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK));
		}catch (Exception e){
			Log.d("Intent ", "invokeSMSIntent: " +e);
			callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR));
		}
	}
	
//	private void send(final CallbackContext callbackContext, final String phoneNumber, final String message) {
//		SmsManager manager = SmsManager.getDefault();
//		final ArrayList<String> parts = manager.divideMessage(message);

//		final BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {

//			boolean anyError = false;
//			int partsCount = parts.size();

//			@Override
//			public void onReceive(Context context, Intent intent) {
//				switch (getResultCode()) {
//					case SmsManager.STATUS_ON_ICC_SENT:
//						anyError = true;
//						break;
//					case Activity.RESULT_OK:
//						break;
//					case SmsManager.RESULT_ERROR_GENERIC_FAILURE:
//						anyError = true;
//						break;
//					case SmsManager.RESULT_ERROR_NO_SERVICE:
//						anyError = true;
//						break;
//					case SmsManager.RESULT_ERROR_NULL_PDU:
//						anyError = true;
//						break;
//					case SmsManager.RESULT_ERROR_RADIO_OFF:
//						anyError = true;
//						break;
				
//				partsCount--;
//				if (partsCount == 0) {
//					if (anyError) {
//						alertSMS(phoneNumber, message, "Gagal Mengirim Pesan");
						//Toast.makeText(cordova.getActivity().getApplicationContext(), "Pesan Gagal Terkirim!", Toast.LENGTH_LONG).show();
//						callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR));
//					} else {
//						alertSMS(phoneNumber, message, "Pesan Terkirim");
						//Toast.makeText(cordova.getActivity().getApplicationContext(), "Pesan Terkirim!", Toast.LENGTH_LONG).show();
//						callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK));

//					}
//					cordova.getActivity().unregisterReceiver(this);
//				}
//			}
//		};

//		if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT){
//			String intentFilterAction = INTENT_FILTER_SMS_SENT + java.util.UUID.randomUUID().toString();
//			this.cordova.getActivity().registerReceiver(broadcastReceiver, new IntentFilter(intentFilterAction));
//			PendingIntent sentIntent = PendingIntent.getBroadcast(this.cordova.getActivity(), 0, new Intent(intentFilterAction), 0);
//			manager.sendTextMessage(phoneNumber, null, message, sentIntent, null);
//		}else{
//			Intent sendIntent = new Intent(Intent.ACTION_VIEW);
//			sendIntent.putExtra("sms_body", message);
//			sendIntent.putExtra("address", phoneNumber);
//			sendIntent.setData(Uri.parse("smsto:" + Uri.encode(phoneNumber)));
//			this.cordova.getActivity().startActivity(sendIntent);
//			callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK));
//		}


//	}
}
