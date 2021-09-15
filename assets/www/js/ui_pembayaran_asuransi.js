$('document').ready(function(){
		   var displayCase = document.getElementById('text1').value;
		   
		  if(displayCase=='JIWASRAYA'){
				setVisible('jenisPembayaran','none');
				setVisible('nomorSPAJ','none');
				setVisible('kodePeserta','block');
				setVisible('nominal', 'none');
				setVisible('favorit-group', 'block');
				document.getElementById('text5').value="";
				document.getElementById('text2Label').innerHTML="Kode Peserta";
		   }else if(displayCase=='BUMIPUTERA'){
				document.getElementById('text2').value="";
				document.getElementById('text2Label').innerHTML="Kode Peserta";
				setVisible('kodePeserta','none');
				setVisible('jenisPembayaran','block');
				setVisible('nomorSPAJ','block');
				setVisible('nominal', 'none');
				setVisible('favorit-group', 'none');
				
				//hide safari IOS
				hideOption();
				$('select').detachOptions('[value=AWAL]');
				showPremiFirst("PERTAMA", "LANJUTAN", "TOPUP");
				//end hide
				
				$("#text4").children("option[value^= PERTAMA]").show();
				$("#text4 option[value='PERTAMA']").prop('selected', true);
		   }else if(displayCase=='PRUDENTIAL'){
				document.getElementById('text2').value="";
				document.getElementById('text2Label').innerHTML="Kode Peserta";
				setVisible('kodePeserta','none');
				setVisible('jenisPembayaran','block');
				setVisible('nomorSPAJ','block');
				setVisible('nominal', 'block');
				setVisible('favorit-group', 'none');
				$("#text4").children("option[value^= AWAL]").show()
				
				//hide safari IOS
				hideOption();
				$('select').detachOptions('[value=PERTAMA]');
				showPremiFirst("AWAL", "LANJUTAN", "TOPUP");
				//end hide
				
				$("#text4 option[value='AWAL']").prop('selected', true);
			   
		   }else{
			   setVisible('jenisPembayaran','none');
			   setVisible('nomorSPAJ','none');
			   setVisible('nominal', 'none');
		   }
        });

function setVisible(id,block){
    document.getElementById(id).style.display = block;
}

function hideOption() {
    (function($){
     
     $.fn.extend({detachOptions: function(o) {
        var s = this;
                 
        return s.each(function(){
            var d = s.data('selectOptions') || [];
                               
            s.find(o).each(function() {
                d.push($(this).detach());
            });
                      
            s.data('selectOptions', d);
        });},
                 
    attachOptions: function(o) {
        var s = this;
                 
        return s.each(function(){
            var d = s.data('selectOptions') || [];
                               
            for (var i in d) {
                if (d[i].is(o)) {
                    s.append(d[i]);
                    console.log(d[i]);
                    // TODO: remove option from data array
                }
            }
        });
    }});
     
    })(jQuery);
}

function showPremiFirst(FIRST, LANJUTAN, TOPUP) {
    hideOption();
    $('select').detachOptions('[value=LANJUTAN]');
    $('select').detachOptions('[value=TOPUP]');
    $('.jenisPembayaran').attachOptions('[value='+FIRST+']');
    $('.jenisPembayaran').attachOptions('[value='+LANJUTAN+']');
    $('.jenisPembayaran').attachOptions('[value='+TOPUP+']');
}

function changeService(service){
    switch (service.value){

        case 'JIWASRAYA':
            setVisible('jenisPembayaran','none');
            setVisible('nomorSPAJ','none');
            setVisible('kodePeserta','block');
            setVisible('nominal', 'none');
            setVisible('favorit-group', 'block');
            document.getElementById('text5').value="";
            document.getElementById('text2Label').innerHTML="Kode Peserta";
            break;

        case 'BUMIPUTERA':
            document.getElementById('text2').value="";
            document.getElementById('text2Label').innerHTML="Kode Peserta";
            setVisible('kodePeserta','none');
            setVisible('jenisPembayaran','block');
            setVisible('nomorSPAJ','block');
            setVisible('nominal', 'none');
            setVisible('favorit-group', 'none');
            
            //hide safari IOS
            hideOption();
            $('select').detachOptions('[value=AWAL]');
            showPremiFirst("PERTAMA", "LANJUTAN", "TOPUP");
            //end hide
            
            $("#text4").children("option[value^= PERTAMA]").show();
            $("#text4 option[value='PERTAMA']").prop('selected', true);
            break;

        case 'PRUDENTIAL' :
            document.getElementById('text2').value="";
            document.getElementById('text2Label').innerHTML="Kode Peserta";
            setVisible('kodePeserta','none');
            setVisible('jenisPembayaran','block');
            setVisible('nomorSPAJ','block');
            setVisible('nominal', 'block');
            setVisible('favorit-group', 'none');
            $("#text4").children("option[value^= AWAL]").show()
            
            //hide safari IOS
            hideOption();
            $('select').detachOptions('[value=PERTAMA]');
            showPremiFirst("AWAL", "LANJUTAN", "TOPUP");
            //end hide
            
            $("#text4 option[value='AWAL']").prop('selected', true);
            break;
    }
}

function setTopUpPremi(jenis) {
    if ($('#text1').val() == 'BUMIPUTERA') {
        if (jenis.value == "TOPUP") {
            setVisible('nominal', 'block');
        } else {
            setVisible('nominal', 'none');
            document.getElementById('text6').value="";
        }
    }
}