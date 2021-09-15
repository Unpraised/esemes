/**
 * Created with JetBrains PhpStorm.
 * User: Abdul Tholib
 * Date: 5/10/16
 * Time: 10:07 AM
 * To change this template use File | Settings | File Templates.
 */
var parent = $(".wrapper .container-fluid").children();
parent.length = parent.length-1;

$('document').ready(function(){
    favoritGroup();
    showFavoritByID();
});

function isFavorit(){
    var favorit = document.getElementById("text"+((parent.length)-1)).checked;
    (favorit ?  $('#showFavoritName').show() :  $('#showFavoritName').hide());
    return favorit;
}

function addFavorit(){
    var idFavorit = (document.getElementById("text"+(parent.length)).value);

    if(idFavorit != ''){
        var uriSegment = (window.location.href).split('/');
        var arrObj = [];

        for(i = 1; i <= parent.length; i++){
            arrObj.push({
                fieldID : "text"+i,
                val     : document.getElementById("text"+i).value
            });
        }

        var data = {
            favoritID : idFavorit,
            url       : uriSegment[uriSegment.length - 1],
            detail    : arrObj
        };

        window.localStorage.setItem(idFavorit, JSON.stringify(data));

        return true;

    }else{
       return false;
    }
}

function showFavoritByID(){
    var favoritID = window.sessionStorage.getItem("favoritID");

    if(favoritID != null){

        var data = JSON.parse(window.localStorage.getItem(favoritID));
        var detail = data.detail;
        for(var i = 0; i < detail.length;i++){
            $("#"+detail[i].fieldID).val(detail[i].val);
        }

       window.sessionStorage.removeItem("favoritID");
    }
}

function favoritGroup(){
    $('#favorit-group').empty();

    var favoritContent =
        "<div class='row' id='favorit-checked'><div class='form-group'>"+
           "<label><input type='checkbox' onclick='isFavorit()' id='text"+(parent.length-1)+"'>Daftar Favorit</label>"+
           "<input type='hidden' id='isFavoritID' value='true'>"+
        "</div></div>"+
        "<div class='row' id='showFavoritName'><div class='form-group'>"+
           "<input type='text' class='form-control alignright' style='margin:auto;' placeholder='nama daftar favorit(max 25 karakter)' onkeyup='limit("+(parent.length)+",25)'' id='text"+(parent.length)+"' >"+
        "</div></div>";

    $("#favorit-group").append(favoritContent);
    $('#showFavoritName').hide();
}



