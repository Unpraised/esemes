
function onChangeBPJSTK(id){
    switch (id.selectedIndex){
        case 1 :
            document.getElementById('text2Label').innerHTML="NIK KTP:";
            break;
        case 2 :
            document.getElementById('text2Label').innerHTML="Kode Bayar:";
            break;

        default :
            document.getElementById('text2Label').innerHTML="Nomor Tagihan:";
            break;
    }
}
