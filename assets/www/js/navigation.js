$('#headerButton').unbind('click').click(function() {window.history.back();});
$('#headerButtonMain').unbind('click').click(function() {navigator.app.exitApp();});
$('#homeBackButton').unbind('click').click(function() {window.history.go(-2);});
$('#homeBackButton1').unbind('click').click(function() {window.history.go(-1);});
$('#homeBackButton2').unbind('click').click(function() {window.history.go(-3);});
function limit(id,number) {
	var stop = number;
	var input = document.getElementById("text"+id);
	var inputVal = input.value;
	var limit = inputVal.length;
	if(limit > stop){
		var saveInput = inputVal.slice(0, stop); 
		input.value = saveInput;
		$('#text'+id).tooltip({
			animation:"fade",
			trigger:"manual",
			title:"Maksimal input " + stop + " digit",
			placement: "top"
		});
		$('#text'+id).tooltip('show');
		$('#text'+id).on('shown.bs.tooltip', function() {
			setTimeout(function() {
				$('#text'+id).tooltip('hide');
			}, 3000);
		});
	}
}