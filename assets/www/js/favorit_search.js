var availableFav = [],
	keys = Object.keys(localStorage),
	i = keys.length;

while ( i-- ) {
	var getKey = JSON.parse(localStorage.getItem(keys[i]));
	availableFav.push( getKey.favoritID );
}

$( function() {
	$("#searchFav").autocomplete({
	  source: availableFav,
	  select: function (event, ui) {
		  searchFavUi(ui.item.value);
	  }
	});
} );

function searchFav(){
	var searchItem = document.getElementById('searchFav').value;
	if(searchItem==""){
		$("#listFavorit").children().show();
	}else{
		$("#listFavorit").children().hide();
		$("[id='"+ searchItem +"']").show();
	}
}

function searchFavUi(searchItem){
	$("[id='"+ searchItem +"']").show();
}