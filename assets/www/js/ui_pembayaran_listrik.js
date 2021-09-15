function choose(){
	var selectBox = document.getElementById("text2");
	var option = selectBox.options[selectBox.selectedIndex].value;
	switch (option)
	{
	   case 'PLN':
           document.getElementsByTagName("label")[2].innerHTML = 'IDPEL:';
           $('#favorit-checked').show();

	   break;
	
	   case 'PLNNONTAGLIS':
           document.getElementsByTagName("label")[2].innerHTML = 'No. Registrasi:';
           $('#favorit-checked').hide();
	   break;
	   
	   default:
           document.getElementsByName('listrik')[0].placeholder='No. Registrasi';
           $('#favorit-checked').hide();
	}
}
