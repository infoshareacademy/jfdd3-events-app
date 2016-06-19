'use strict';

$('.event-thumbnail').click(function() {
    $('.gridster').removeClass('show');
    $('.gridster').addClass('hide');
    $('.event-info').removeClass('hide');
    $('.event-info').addClass('show');
});

$('.backward-button').click(function() {
    $('.event-info').removeClass('show');
    $('.event-info').addClass('hide');
    $('.gridster').removeClass('hide');
    $('.gridster').addClass('show');
});