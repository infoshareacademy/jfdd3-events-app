'use strict';

$('.event-thumbnail').click(function() {
    $('.gridster').removeClass('show');
    $('.gridster').addClass('hide');
    $('.menu-months').removeClass('show');
    $('.menu-months').addClass('hide');
    $('.event-info').removeClass('hide');
    $('.event-info').addClass('show');
});

$('.backward-button').click(function() {
    $('.event-info').removeClass('show');
    $('.event-info').addClass('hide');
    $('.menu-months').removeClass('hide');
    $('.menu-months').addClass('show');
    $('.gridster').removeClass('hide');
    $('.gridster').addClass('show');
});

