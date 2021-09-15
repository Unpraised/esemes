$('document').ready(function(){
    choose();
});


function choose(){
	var selectBox = document.getElementById("text1");
	var option = selectBox.options[selectBox.selectedIndex].value;
	switch (option)
	{
	   case 'TOP':
           $('#reff-group').hide();
           $('#isChooseCek').val("false");

	   break;
	
	   case 'CEK':
           $('#reff-group').show();
           $('#isChooseCek').val("true");
	   break;
	   
	   default:
	}
}