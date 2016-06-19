'use strict';

$('.event-thumbnail').click(function() {
    $('.gridster').removeClass('show');
    $('.gridster').addClass('hide');
    $('.event-description').removeClass('hide');
    $('.event-description').addClass('show');
});

$('.backward-button').click(function() {
    $('.event-description').removeClass('show');
    $('.event-description').addClass('hide');
    $('.gridster').removeClass('hide');
    $('.gridster').addClass('show');
});