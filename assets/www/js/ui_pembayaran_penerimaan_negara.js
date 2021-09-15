$('document').ready(function(){
    $('#daerah').hide();
    $('#objek').hide();
    $('#sppt').hide();
});

function hideOption() {
    (function($){
     
     $.fn.extend({detachOptions: function(o) {
            var s = this;
            
            return s.each(function(){
                var d = s.data('selectOptions') || [];
                
                s.find(o).each(function() {
                    d.push($(this).detach());
                });
                s.data('selectOptions', d);
            });
    
    }, attachOptions: function(o) {
            var s = this;
            
            return s.each(function(){
                var d = s.data('selectOptions') || [];
                          
                for (var i in d) {
                    if (d[i].is(o)) {
                        s.append(d[i]);
                        console.log(d[i]);
                        // TODO: remove option from data array
                    }
                }
            });
    }});
     
    })(jQuery);
}

function showDaerah() {
    hideOption();
    $('.daerah').attachOptions('[value=SURABAYA]');
    $('.daerah').attachOptions('[value=BANJARBARU]');
}


function changeService(service){
    switch (service.value) {
        case 'PNBPAHU' :
            $('#daerah').hide();
            $('#tagihan').show();
            $('#objek').hide();
            $('#sppt').hide();
            $('#text2').val('');
            $('#text4').val('');
            $('#text5').val('');
        break;

        case 'PBB' :
            $('#daerah').hide();
            
            //hide for safari and IOS
            //showDaerah();
            //end hide safari and IOS
            
            $('#tagihan').hide();
            $('#objek').show();
            $('#sppt').show();
            $('#text3').val('');
        break;

        case 'PAJAKDAERAH' :
            $('#daerah').show();
            $("#text2 option[value='JAKARTA']").prop('selected', true);
        
            //hide for safari and IOS
            hideOption();
            $('select').detachOptions('[value=SURABAYA]');
            $('select').detachOptions('[value=BANJARBARU]');
            //end hide safari and IOS
            
            $('#tagihan').hide();
            $('#objek').show();
            $('#sppt').hide();
            $('#text3').val('');
            $('#text4').val('');
            $('#text5').val('');
        break;
    }
}
