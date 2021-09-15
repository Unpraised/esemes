/**
 * Created with JetBrains PhpStorm.
 * User: Abdul Tholib
 * Date: 4/27/16
 * Time: 3:23 PM
 * To change this template use File | Settings | File Templates.
 */

var customBridge = new function(){

    this.sendSMS = function(message){

        cordova.exec(
          function success(msg){
          	$(".loader").hide();
          	// alert("Pesan Terkirim");
          },
          function failure(e){
          	$(".loader").hide();
			//alert("Gagal Mengirim Pesan");
          },
           "SMS","sendSMS",[message]);
    }


};

