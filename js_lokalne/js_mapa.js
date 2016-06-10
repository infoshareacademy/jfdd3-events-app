'use strict'


$(document).ready(function(){
    $('#tab-map').hide()
});

$(document).ready(function() {
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
});


