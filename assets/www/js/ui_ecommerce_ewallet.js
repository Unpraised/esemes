$('document').ready(function(){
   choose();
});

function choose(){
	var selectBox = document.getElementById("text2");
	var option = selectBox.options[selectBox.selectedIndex].value;
	switch (option)
	{
	   case 'TRF':
           $('#rekening-group').show();
           $('#nominal-group').show();
           $('#isChooseTopup').val("true");
           $('#favorit-checked').show();
           $('.homePadding').show();
           $('.home').hide();

	   break;
	   default:
           $('#rekening-group').hide();
           $('#nominal-group').hide();
           $('#isChooseTopup').val("false");
           $('#favorit-checked').hide();

	}
}