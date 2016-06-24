eventCalendarApp.directive('appcalendar', function() {

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

    function getCalendarDays(begin, howMany) {
        return getDates(new Date('2016-07-01'), new Date('2016-07-31')).map(function (date, index) {

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

            if (index < 2 + begin) {

                return createButton('col-xs-3 col-sm-2 col-md-2 col-lg-1');

            };
            if (index >=2 + begin && index < 4 + begin) {
                return createButton('hidden-xs col-sm-2 col-md-2 col-lg-1');

            };
            if (index >=4 + begin && index < 10 + begin) {

                return createButton('hidden-xs hidden-sm hidden-md col-lg-1');

            };
            return date;
        }).slice(begin, howMany);
    }

    var pos = 0;

    return {
        templateUrl: 'ng-views/calendar.html',

        link: function(scope, element, attribute) {



            scope.moveLeft = function () {
                pos += 1;
                $('main div.block').empty().append(getCalendarDays(pos, pos + 10));
            };

            scope.moveRight = function () {
                pos -= 1;
                $('main div.block').empty().append(getCalendarDays(pos, pos +  10));
            };

            //scope.calendarDays = ['one', 'two', 'three'];
            $('main div.block').empty().append(getCalendarDays(pos, pos + 10));

        }
    }
});