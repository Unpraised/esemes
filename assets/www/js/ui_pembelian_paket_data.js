function switchProvider(){
	var provider = document.getElementById("text1").value;
	
	switch(provider) {
		case "XLData":
			$("#xlOption").show();
			$("#indosatOption").hide();
			$("#telkomselOption").hide();
                        $("#digitaltelkomselOption").hide();

			break;
		case "indosat":
			$("#xlOption").hide();
			$("#indosatOption").show();
			$("#telkomselOption").hide();
                        $("#digitaltelkomselOption").hide();
			break;
		case "PULSA INTERNET TELKOMSEL":
			$("#xlOption").hide();
			$("#indosatOption").hide();
			$("#telkomselOption").show();
                        $("#digitaltelkomselOption").hide();

			break;
		case "Paket Digital Telkomsel":
            $("#xlOption").hide();
            $("#indosatOption").hide();
            $("#telkomselOption").hide();
			$("#digitaltelkomselOption").show();
          	break;
	} 
}

$(document).ready(function(){
    switchProvider()
});	