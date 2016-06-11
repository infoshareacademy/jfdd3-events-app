'use strict';
/*
Skrypt przełączający między kalendarzem a mapą
*/






$('.nav-tabs').each(function () {
    var $this = $(this);
    var $tab = $this.find('li.active');
    var $link = $tab.find('a');
    var $panel = $($link.attr('href'));

    $this.on('click', '.tab-control', function (e) {
        e.preventDefault();
        var $link = $(this);
        var id = this.hash;

        if (id && !$link.is('.active')) {
            $panel.removeClass('active');
            $tab.removeClass('active');

            $panel = $(id).addClass('active');
            $tab = $link.parent().addClass('active');
        }
    });

});










































/*$(document).ready(function(){
    $('#tab-map').hide()
});*/

/*$(document).ready(function() {
    $('#button-map').click(function (event) {
        event.preventDefault();
        $('#tab-calendar').hide(); $('#tab-map').show();

    });
});


$(document).ready(function() {
    $('#button-calendar').click(function (event) {
        event.preventDefault();
        $('#tab-map').hide(); $('#tab-calendar').show();

    });
});*/


