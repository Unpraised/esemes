$(function() {
	/*
    $(window).on('resize', function(e) {
      fungsiHideHomeButton();
    });
	*/
    function fungsiHideHomeButton() {
      var totalHeightWrapper = $('.wrapper').height() + $('.home').height() + 85;

            if ($('.bgsend').height() < totalHeightWrapper) {
               $('.home').hide();
               $('.homePadding').show();
            } else {
               $('.home').show();
               $('.homePadding').hide();
            }
    }

    fungsiHideHomeButton();

    })