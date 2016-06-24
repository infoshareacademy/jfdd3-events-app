/**
 * Created by elwirak on 17.06.16.
 */
/**
 * Created by Elwira on 2016-06-14.
 */




Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
};

function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(currentDate)
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

var calendarDaysHTML = getDates(new Date('2016-07-01'), new Date('2016-07-31')).map(function (date, index) {

    function createButton(buttonClasses) {
        return $('<div>')
            .addClass(buttonClasses)
            .append( $('<button>')
                .addClass('calendar-button')
                .text(date)
            )
            .click(function() {
                console.log('date click');
            });
    }

    if (index < 2) {

        return createButton('col-xs-3 col-sm-2 col-md-2 col-lg-1');

    };
    if (index >=2 && index < 4) {
        return createButton('hidden-xs col-sm-2 col-md-2 col-lg-1');

    };
    if (index >=4 && index < 10) {

        return createButton('hidden-xs hidden-sm hidden-md col-lg-1');

    };
    return date;
});

//$('main div.block').append(result);
$(document).ready(function() {
    console.log($('header div a').length);
});


