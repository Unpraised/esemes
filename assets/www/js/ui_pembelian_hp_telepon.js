$('document').ready(function(){
    choose();
});

function choose(){
	var telkomsel = ['15.000','25.000','30.000','40.000','50.000','75.000','100.000','150.000','200.000','300.000','500.000','1.000.000'];
	var indosat = ['25.000','50.000','100.000','250.000','500.000','1.000.000'];
	var xl = ['25.000','50.000','100.000','200.000'];
	var tri = ['30.000','50.000','100.000','150.000','300.000','500.000'];
	var flexi = ['50.000','100.000','150.000','200.000','250.000','350.000','500.000'];
	var esia = ['25.000','50.000','100.000','150.000','250.000'];
	var smartfren = ['25.000','50.000','100.000','150.000','200.000','300.000','500.000'];
	
	var selectBox = document.getElementById("text1");
	var option = selectBox.options[selectBox.selectedIndex].value;
    var operator = null;

	switch (option)
	{
	   case 'TELKOMSEL':
           operator = telkomsel;
	   break;
	
	   case 'INDOSAT':
           operator = indosat;
	   break;
	
	   case 'XL':
           operator = xl;
	   break;
	   case '3':
		   operator = tri;
	   break;
	
	   case 'FLEXI':
           operator = flexi;
	   break;
	
	   case 'ESIA':
           operator = esia;
	   break;
	
	   case 'FREN':
           operator = smartfren;
	   break;
	   
	   default:
	}

    $('#text3').empty();
    for (i = 0; i < operator.length; i++) {
        var val = operator[i];
        var insert = '<option value=' + val + '>' + operator[i] + '</option>';
        $('#text3').append(insert);
    }
}