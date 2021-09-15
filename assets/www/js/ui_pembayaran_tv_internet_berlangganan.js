$('document').ready(function(){
   choose();
});

function choose(){
	var selectBox = document.getElementById("text1");
	var option = selectBox.options[selectBox.selectedIndex].value;
	switch (option)
	{
	   case 'FIRSTMEDIA':
           $('#reff-group').show();
           $('#isFirstmedia').val("true");
	   break;
	   
	   default:
           $('#reff-group').hide();
           $('#isFirstmedia').val("false");

	}
}