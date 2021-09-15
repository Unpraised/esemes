
function choose(){
	var zakat = ['PPSDMS','Rumah Zakat','DPU Daarut Tauhid','PKPU','Badan Amil Zakat Nasional','Dompet Dhuafa','Bamuis','Aksi Cepat Tanggap (ACT)'];
	var infaq = ['Bamuis','Rumah Zakat','PPSDMS','DPU Daarut Tauhid','PKPU','Badan Amil Zakat Nasional','Dompet Dhuafa','Aksi Cepat Tanggap (ACT)'];
	var qurban = ['Dompet Dhuafa','Rumah Zakat','Badan Amil Zakat Nasional','DPU Daarut Tauhid','PKPU','Aksi Cepat Tanggap (ACT)'];
	var wakafTunai = ['Dompet Dhuafa','Aksi Cepat Tanggap (ACT)'];
	var wakafProd = ['Aksi Cepat Tanggap (ACT)'];
	var check = ['PPSDMS','Rumah Zakat','DPU Daarut Tauhid','PKPU','Badan Amil Zakat Nasional','Dompet Dhuafa','Bamuis','Aksi Cepat Tanggap (ACT)'];
	var v = ['PPSDMS','RZ','DPUDT','PKPU','BAZNAS','DD','BAMUIS','ACT'];
	var selectBox = document.getElementById("jenis");
	var option = selectBox.options[selectBox.selectedIndex].value;
	
	switch (option)	{
	   case 'ZAKAT':
					$('#merchant').empty();
					for (i = 0; i < zakat.length; i++) {
						for (j = 0; j < check.length; j++) {
							if(zakat[i]==check[j]){
								var val = v[j];
								break;
							}
						}
						var insert = '<option value=' + val + '>' + zakat[i] + '</option>';
						$('#merchant').append(insert);
					}
	   break;
	
	   case 'INFAQ':
					$('#merchant').empty();
					for (i = 0; i < infaq.length; i++) {
						for (j = 0; j < check.length; j++) {
							if(infaq[i]==check[j]){
								var val = v[j];
								break;
							}
						}
						var insert = '<option value=' + val + '>' + infaq[i] + '</option>';
						$('#merchant').append(insert);
					}
	   break;
	
	   case 'QURBAN':
					$('#merchant').empty();
					for (i = 0; i < qurban.length; i++) {
						for (j = 0; j < check.length; j++) {
							if(qurban[i]==check[j]){
								var val = v[j];
								break;
							}
						}
						var insert = '<option value=' + val + '>' + qurban[i] + '</option>';
						$('#merchant').append(insert);
					}
	   break;
	
	   case 'WAKAFTUNAI':
					$('#merchant').empty();
					for (i = 0; i < wakafTunai.length; i++) {
						for (j = 0; j < check.length; j++) {
							if(wakafTunai[i]==check[j]){
								var val = v[j];
								break;
							}
						}
						var insert = '<option value=' + val + '>' + wakafTunai[i] + '</option>';
						$('#merchant').append(insert);
					}
	   break;
	
	   case 'WAKAFPRODUKTIF':
					$('#merchant').empty();
					for (i = 0; i < wakafProd.length; i++) {
						for (j = 0; j < check.length; j++) {
							if(wakafProd[i]==check[j]){
								var val = v[j];
								break;
							}
						}
						var insert = '<option value=' + val + '>' + wakafProd[i] + '</option>';
						$('#merchant').append(insert);
					}
	   break;
	   
	   default:
	}
	
	selectMerchant();
}

function selectMerchant(){
	var nama = $("#merchant").val();
	if(nama=="RZ") $("#row-hp").show();
	else $("#row-hp").hide();
}