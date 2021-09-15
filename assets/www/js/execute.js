//menu informasi
$('#saldo').unbind('click').click(function() {saldo();});
$('#mutasi_transaksi').unbind('click').click(function() {mutasi_transaksi();});
$('#rekening_dplk').unbind('click').click(function() {rekening_dplk();});
$('#kartu_kredit_bni').unbind('click').click(function() {kartu_kredit_bni();});
$('#telepon_pasca_bayar').unbind('click').click(function() {telepon_pasca_bayar();});
$('#listrik').unbind('click').click(function() {listrik();});
$('#internet_tv_berlangganan').unbind('click').click(function() {internet_tv_berlangganan();});
$('#kai').unbind('click').click(function() {kai();});
$('#pgn').unbind('click').click(function() {pgn();});//CR19077
function saldo(){
    var x = 'SAL';
    exec(x);
}
function mutasi_transaksi(){
    var x = 'HST';
    exec(x);
}
function rekening_dplk(){
    var format = 'INQ DPLK ';
    var text1 = document.getElementById('text1').value;
    var x = format.concat(text1);
    if(text1 != ''){
        exec(x);
    }
}
function kartu_kredit_bni(){
    var format = 'TAG BNI ';
    var text1 = document.getElementById('text1').value;
    var x = format.concat(text1);
    if(text1 != ''){
        exec(x);
    }
}
function telepon_pasca_bayar(){
    var format = 'TAG ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var x = format.concat(text1,' ',text2);
    if(text2 != ''){
        exec(x);
    }
}
function listrik(){
    var format = 'TAG ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var x = format.concat(text1,' ',text2);
    if(text1 != '' && text2 != ''){
        exec(x);
    }
}
function internet_tv_berlangganan(){
    var format = 'TAG ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var x = format.concat(text1,' ',text2);
    if(text1 != '' && text2 != ''){
        exec(x);
    }
}
//end of menu informasi

//menu transfer
$('#trf_rekening_bni').unbind('click').click(function() {trf_rekening_bni();});
$('#trf_antar_bank').unbind('click').click(function() {trf_antar_bank();});
$('#trf_dengan_berita').unbind('click').click(function() {trf_dengan_berita();});
$('#trf_dengan_notifikasi').unbind('click').click(function() {trf_dengan_notifikasi();});
$('#trf_dengan_berita_dan_notifikasi').unbind('click').click(function() {trf_dengan_berita_dan_notifikasi();});
$('#trf_sms_tunai').unbind('click').click(function() {trf_sms_tunai();});
$('#trf_rekening_dplk_bni_simponi').unbind('click').click(function() {trf_rekening_dplk_bni_simponi();});
function trf_rekening_bni(){
    var format = 'TRANSFER ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var x = format.concat(text1,' ',text2);
    if(text1 != '' && text2 != ''){
        exec(x);
    }
}
function trf_antar_bank(){
    var format = 'TRANSFER ANTARBANK ';
    var textTemp = document.getElementById('text1').value;
    var text1 = textTemp.split(" ");
    var text2 = document.getElementById('text2').value;
    var text3 = document.getElementById('text3').value;
    var text4 = document.getElementById('text4').value;
    var text5 = document.getElementById('text5').value;
    var x = format.concat(text1[0],text2,' ',text3,' #',text4,'# ', text5);
    if(text1 != '' && text2 != '' && text3 != ''){
        exec(x);
    }
}
function trf_dengan_berita(){
    var format = 'TRANSFER BERITA ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var text3 = document.getElementById('text3').value;
    var x = format.concat(text1,' ',text2,' #',text3,'#');
    if(text1 != '' && text2 != '' && text3 != ''){
        exec(x);
    }
}
function trf_dengan_notifikasi(){
    var format = 'TRANSFER NOTIFIKASI ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var text3 = document.getElementById('text3').value;
    var x = format.concat(text1,' ',text2,' ',text3);
    if(text1 != '' && text2 != '' && text3 != ''){
        exec(x);
    }
}
function trf_dengan_berita_dan_notifikasi(){
    var format = 'TRANSFER BERITANOTIFIKASI ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var text3 = document.getElementById('text3').value;
    var text4 = document.getElementById('text4').value;
    var x = format.concat(text1,' ',text2,' #',text3,'# ',text4);
    if(text1 != '' && text2 != '' && text3 != '' && text4 != ''){
        exec(x);
    }
}
function trf_sms_tunai(){
    var format = 'TUNAI ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var text3 = document.getElementById('text3').value;
    var text4 = document.getElementById('text4').value;
    var x = format.concat('#',text1,'# #',text2,'# ',text3,' ',text4);
    if(text1 != '' && text2 != '' && text3 != '' && text4 != ''){
        exec(x);
    }
}
function trf_rekening_dplk_bni_simponi(){
    var format = 'SETOR DPLK ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var x = format.concat(text1,' ',text2);
    if(text1 != '' && text2 != ''){
        exec(x);
    }
}
//end of menu transfer


//menu pembayaran
$('#kartu_kredit').unbind('click').click(function() {kartu_kredit();});
$('#telepon_pasca_bayar2').unbind('click').click(function() {telepon_pasca_bayar2();});
$('#listrik2').unbind('click').click(function() {listrik2();});
$('#air_listrik').unbind('click').click(function() {air_listrik();});
$('#tv_internet_berlangganan').unbind('click').click(function() {tv_internet_berlangganan();});
$('#tiket').unbind('click').click(function() {tiket();});
$('#zakat_infaq_qurban').unbind('click').click(function() {zakat_infaq_qurban();});
$('#penerimaan_negara').unbind('click').click(function() {penerimaan_negara();});
$('#asuransi').unbind('click').click(function() {asuransi();});
$('#pinjaman_personal').unbind('click').click(function() {pinjaman_personal();});
$('#samsat').unbind('click').click(function() {samsat();});
$('#angsuran_multi_finance').unbind('click').click(function() {angsuran_multi_finance();});
$('#um_ptkin').unbind('click').click(function() {um_ptkin();});
$('#sbmptn').unbind('click').click(function() {sbmptn();});
$('#bpjs').unbind('click').click(function() {bpjs();});
$('#tki').unbind('click').click(function() {tki();});
$('#kepelabuhanan').unbind('click').click(function() {kepelabuhanan();});

function kartu_kredit(){
    var format = 'PAY ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var text3 = document.getElementById('text3').value;
    var x = format.concat(text1,' ',text2,' ',text3);
    if(text1 != '' && text2 != '' && text3 != ''){
        exec(x);
    }
}
function telepon_pasca_bayar2(){
    var format = 'PAY ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var x = format.concat(text1,' ',text2);
    if(text1 != '' && text2 != ''){
        exec(x);
    }
}
function listrik2(){
    var format = 'PAY ';
    var text1 = document.getElementById('text2').value;
    var text2 = document.getElementById('text3').value;
    var x = format.concat(text1,' ',text2);
    if(text1 != '' && text2 != ''){
        exec(x);
    }
}
function air_listrik(){
    var format = 'PAY PAM ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var x = format.concat(text1,' ',text2);
    if(text1 != '' && text2 != ''){
        exec(x);
    }
}
function tv_internet_berlangganan(){
    var format = 'PAY ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var x = '';

	x = format.concat(text1,' ',text2);
	if(text2 != '')
		exec(x);
	else
		alert ('No pelanggan kosong');
    
}

function tiket(){
    var format = 'PAY ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var x = format.concat(text1,' ',text2);
    if(text1 != '' && text2 != ''){
        exec(x);
    }
}
function zakat_infaq_qurban(){
    var format = document.getElementById('jenis').value;
    var merchant = document.getElementById('merchant').value;
    var jumlah = document.getElementById('text2').value;
	
	if(merchant=="RZ"){
		var nohp = document.getElementById('text1').value;
		if(nohp.length<9){
			alert("Nomor handphone tidak valid");
			return;
		}
		format = format.concat(' ',merchant,' ',nohp,' ',jumlah);
	} else {
		format = format.concat(' ',merchant,' ',jumlah);
	}
    
	if(jumlah>0){
		exec(format);
	}
    
}
function penerimaan_negara(){
    var format = 'PAY ';
    var text1 = $('#text1').val();
    var text2 = $('#text2').val();
    var text3 = $('#text3').val();
    var text4 = $('#text4').val();
    var text5 = $('#text5').val();

    if(text1 != '' && text3 != ''){ //PNBP AHU
        var x = format.concat(text1,' ',text3);
        exec(x);
    } else if (text3 == '' && text5 != '') { //PBB
        var x = format.concat(text1, ' ', text3, ' ', text4, ' ', text5);
        exec(x);
    } else if (text3 == '' && text5 == '') { //Pajak Daerah
        var x = format.concat(text1,' ', text2, ' ', text3, ' ', text4);
        exec(x);
    }
}
function asuransi(){
    var format = 'PAY ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var text4 = document.getElementById('text4').value;
    var text5 = document.getElementById('text5').value;
    var text6 = document.getElementById('text6').value;

    //set premi awal prudential

   if(text2 !=''){ //Jiwasraya
        var x = format.concat(text1,' ',text2);
        exec(x);
    }else if(text5 !='' && text6 == ''){ //Bumiputera
        var x = format.concat(text1,' ',text4,' ',text5);
        exec(x);
    } else if (text5 !='' && text6 !='') { //Bumiputera topup premi, Prudential all
        var x = format.concat(text1,' ',text4,' ',text5, ' ', text6);
        exec(x);
    }
}

function bpjs(){
    var format = 'PAY ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var text3 = document.getElementById('text3').value;

    if(text1 !='' && text2 !='' && text3 !=''){
        var x = format.concat(text1,' ',text2,' ',text3);
        exec(x);
    }
}

function pinjaman_personal(){
    var format = 'PAY KTA ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var text3 = document.getElementById('text3').value;
    var x = format.concat(text1,' ',text2,' ',text3);
    if(text1 != '' && text2 != '' && text3 != ''){
        exec(x);
    }
}
function samsat(){
    var format = 'PAY ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var text3 = document.getElementById('text3').value;
    var x = format.concat(text1,' ',text2,'',text3);
    if(text1 != '' && text2 != '' && text3 != ''){
        exec(x);
    }
}
function angsuran_multi_finance(){
    var format = 'PAY ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var x = format.concat(text1,' ',text2);
    if(text1 != '' && text2 != ''){
        exec(x);
    }
}

function um_ptkin() {
    var format = 'PAY UMPTKIN ';
    var text1 = document.getElementById('text1').value;
    var x = format.concat(text1);
    
    if(text1 != ''){
        exec(x);
    }
}

function sbmptn() {
    var format = 'PAY UTBK ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var x = format.concat(text1,' ',text2);
       if(text1 != '' && text2 != ''){
           exec(x);
       }

}

function kai() {
    var format = 'PAY ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var x = format.concat(text1,' ',text2);

    if (text2 != '') {
        exec(x);
    }
}
//CR19077
function pgn() {
    var format = 'PAY PGN ';
    var text1 = document.getElementById('text1').value;
    var x = format.concat(text1);
    if (text1 != '')
        exec(x);
}
//END CR19077
function tki() {
    var format = 'PAY TKI ';
    var text1 = document.getElementById('text1').value;
    var x = format.concat(text1);
    if (text1 != '')
        exec(x);
}
//CR26171
function kepelabuhanan() {
    var format = 'PAY  ';
    var text1 = document.getElementById('text1').value;
     var text2 = document.getElementById('text2').value;
     var x = format.concat(text1,' ',text2);
    if(text1 != '' && text2 != ''){
           exec(x);
       }
}
//end of menu pembayaran

//menu pembelian
$('#LinkAja').unbind('click').click(function() {LinkAja();});
$('#hp_telepon').unbind('click').click(function() {hp_telepon();});
$('#token_listrik').unbind('click').click(function() {token_listrik();});
$('#paketData').unbind('click').click(function() {paketData();});
$('#tapCash').unbind('click').click(function() {tapCash();});
$('#GoJek').unbind('click').click(function() {GoJek();});
//('#GrabPay').unbind('click').click(function() {GrabPay();});
$('#unikqu').unbind('click').click(function() {unikqu();});
$('#uangElektronik').unbind('click').click(function() {uangElektronik();});
$('#orange').unbind('click').click(function() {orange();});
$('#lpg3kg').unbind('click').click(function() {lpg3kg();});

function LinkAja() {
    var format = 'TOP ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var text3 = document.getElementById('text3').value;
    var x = format.concat(text1,' ', text2, ' ', text3);
    
    if (text1 != '' && text2 != '' && text3 != '') {
        exec(x);
    }
}

function hp_telepon(){
    var format = 'TOP ';
    var re = /\./gi;
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var valText3 = document.getElementById('text3').value;
    var text3 = valText3.replace(re,'');
    if(text1 != '' && text2 != '' && text3 != ''){
        if(text1 == 'TELKOMSEL' || text1 == 'INDOSAT'){
            var x = format.concat(text2,' ',text3);
        }else{
            var x = format.concat(text1,' ',text2,' ',text3);
        }
        exec(x);
    }
}

function token_listrik(){
    var text1 = document.getElementById('text1').value;
    var format = 'PLN';
    var text2 = document.getElementById('text2').value;
    var isChooseCek = document.getElementById('isChooseCek').value;
    var x = '';
    if(isChooseCek == 'false'){
        x = text1.concat(' ',format,' ',text2);
        if(text1 != '' && text2 != ''){
            exec(x);
        }
    }else{
        var text3 = document.getElementById('text3').value;
        x = text1.concat(' ',format,' ',text2,' ',text3);
        if(text1 != '' && text2 != '' && text3 != ''){
            exec(x);
        }
    }
}

function tapCash() {
    var format = 'TOP TAPCASH ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var x = format.concat(text1,' ', text2, ' ');
    
    if (text1 != '' && text2 != '') {
        exec(x);
    }
}

function paketData() {
    var format = 'TOP ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var text4 = document.getElementById('text4').value;
    var text5 = document.getElementById('text5').value;
    var text3 = document.getElementById('text3').value;
    var text6 = document.getElementById('text6').value;
   

		if(text1=='PULSA INTERNET TELKOMSEL' && text5 != ''&& text3!=''){
	        var x = format.concat(text1, ' ', text3, ' ', text5);
				exec(x);
		}
		else if(text1=='XLData' && text2 != '' && text3 != ''){
			var x = format.concat(text1, ' ', text3, ' ', text2);
				exec(x);
		}
		else if(text1=='indosat' && text4 != ''&& text3 != ''){
			var x = format.concat(text4, ' ', text3);
				exec(x);
		} 
		 else if (text1=='Paket Digital Telkomsel'){
        	  var x = format.concat(text6, ' ', text3);
                  exec(x);
                 }
		 
		else{
			alert('Semua Field Harus Diisi Sebelum Melanjutkan Transaksi');
		}	
		
		
}

function GoJek() {
    var format = 'TOP ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var text3 = document.getElementById('text3').value;
    var x = format.concat(text1,' ', text2, ' ', text3, ' ');
    
    if (text1 != '' && text2 != '' && text3 != '') {
        exec(x);
    }
}

/*function GrabPay() {
    var format = 'TOP ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var text3 = document.getElementById('text3').value;
    var x = format.concat(text1,' ', text2, ' ', text3);
    
    if (text1 != '' && text2 != '' && text3 != '') {
        exec(x);
    }
}*/

function unikqu() {
    var format = 'TOP UNIKQU ';
    var text1 = $('#text1').val();
    var text2 = $('#text2').val();

    var x = format.concat(text1, ' ', text2);

    if (text1 != '' && text2 != '')
        exec(x);
}

function uangElektronik() {
    var format = 'TOP ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var text3 = document.getElementById('text3').value;
    var x = format.concat(text1,' ', text2, ' ', text3);
    
    if (text1 != '' && text2 != '' && text3 != '') {
        exec(x);
    }
}

function orange() {
    var format = 'TOP ORANGE ';
    var text1 = $('#text1').val();
    var text2 = $('#text2').val();

    var x = format.concat(text1, ' ', text2);

    if (text1 != '' && text2 != '')
        exec(x);
}

function lpg3kg() {
    var format = 'PAY LPG3KG ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var text3 = document.getElementById('text3').value;
    var text4 = document.getElementById('text4').value;

    var x = format.concat(text1,' ', text2, ' ', text3, ' ', text4);

    if (text1 != '' && text2 != '' && text3 != '' && text4 != '') {
        exec(x);
    }
}

function orange() {
    var format = 'TOP ORANGE ';
    var text1 = $('#text1').val();
    var text2 = $('#text2').val();

    var x = format.concat(text1, ' ', text2);

    if (text1 != '' && text2 != '')
        exec(x);
}

//end of menu pembelian

//menu epayment
//$('#epayment').unbind('click').click(function() {epayment();});
$('#ewallet').unbind('click').click(function() {ewallet();});
//function epayment(){
//    var format = 'BELI ';
//    var text1 = document.getElementById('text1').value;
//    var text2 = document.getElementById('text2').value;
//    var x = format.concat(text1,' ',text2);
//    if(text1 != '' && text2 != ''){
//        exec(x);
//    }
//}
function ewallet(){
    var isChooseTopup = document.getElementById('isChooseTopup').value;
    var text2 = document.getElementById('text2').value;
    var x = '';
    if(isChooseTopup == 'false'){
        x = text2;
        exec(x);
    }else{
        var text3 = document.getElementById('text3').value;
        var text4 = document.getElementById('text4').value;
        x = text2.concat(' ',text3,' ',text4);
        if(text3 != '' && text4 != ''){
            exec(x);
        }
    }
}
//end of menu epayment


//menu pengaturan
$('#ganti_pin').unbind('click').click(function() {ganti_pin();});
$('#daftarRekening').unbind('click').click(function() {daftarRekening();});
$('#gantiRekening').unbind('click').click(function() {gantiRekening();});

function ganti_pin(){
    var format = 'PIN ';
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var x = format.concat(text1,' ',text2);
    var t1Hide = text1.replace(/./g, '*');
    var t2Hide = text2.replace(/./g, '*');
    var y = format.concat(t1Hide,' ',t2Hide);
    if(text1 != '' && text2 != ''){
        exec(x,y);
    }
}

function daftarRekening() {
    var format = 'DAFTAR REKENING ';

    exec(format);
}

function gantiRekening() {
    var format = 'GANTI REKENING ';
    var text1 = document.getElementById('text1').value;
    var x = format.concat(text1);

    if (text1 != '') {
        exec(x);
    }
}
//end of menu pengaturan

//menu free syntax
$('#free_syntax').unbind('click').click(function() {free_syntax();});
function free_syntax(){
    var x = document.getElementById('text1').value;
    if(x != ''){
        exec(x);
    }
}
//end of menu free syntax

function exec(param1,param2){
    $(".loader").show();
    if(param1 != null){
        // var showMessage = (typeof param2 === 'undefined') ? param1  :param2;
        // $(document).ready(function() {
        //     $.getScript("bootstrap/js/bootbox.min.js").done(function(){
        //         bootbox.dialog({
        //             message : showMessage,
        //             title   : "Anda akan mengirim ?",
        //             buttons:{
        //                 warning:{
        //                     label:"Setuju",
        //                     className :"btn btn-warning",
        //                     callback : function(){
                                send(param1);
        //                     }
        //                 },
        //                 default:{
        //                     label:"Batal",
        //                     className :"btn btn-default"
        //                 }
        //             }
        //         });
        //     });
        // });
    }
}

function send(message){

    var data =[message];
    var isfavorit = window.document.getElementById('isFavoritID');
    isfavorit = (isfavorit == null ? false : isFavorit());

    if(isfavorit){
        if(window.localStorage.length < 100){
            if(addFavorit()){
                customBridge.sendSMS(message);
            }else{
                boxAlert("Nama favorit tidak boleh kosong dan pesan anda gagal terkirim!");
            }

        }else{
            boxAlert("Fitur favorit maksimal 100 item dan pesan anda gagal terkirim!");
        }
    }else{
        customBridge.sendSMS(message);
    }
}

function boxAlert(msg){
    $('document').ready(function(){
        $.getScript("bootstrap/js/bootbox.min.js").done(function(){
           bootbox.alert(msg);
        });
    });
}
