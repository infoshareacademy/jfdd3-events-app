$(document).ready(function () {
    var months = [
        'Styczeń',
        'Luty',
        'Marzec',
        'Kwiecień',
        'Maj',
        'Czerwiec',
        'Lipiec',
        'Sierpień',
        'Wrzesień',
        'Październik',
        'Listopad',
        'Grudzień'
    ];
    $('.date-button a').not('.arrow-btn').each(function (index) {
        $(this).text(months[(index+5)%12]);
    })
});