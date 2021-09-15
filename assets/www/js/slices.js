/**
 * Created with JetBrains PhpStorm.
 * User: Abdul Tholib
 * Date: 5/13/16
 * Time: 4:30 PM
 * To change this template use File | Settings | File Templates.
 */

$('document').ready(function(){
    $('.footer').empty();

    var content = '<div class="footer-content">'+
                    '<span class="bigger-120" style="font-weight:100">'+
                      '<span>Versi 2.5</span>'+
                   '</span>'+
                  '</div>';

   $('.footer').append(content);
});
