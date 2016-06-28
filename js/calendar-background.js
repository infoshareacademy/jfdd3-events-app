'use strict';
var images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'];
$('.event-main-container').css({'background-image': 'url(../img/foto-event-size/' + images[Math.floor(Math.random() *      images.length)] + ')'});