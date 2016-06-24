eventCalendarApp.directive('appcalendar', function() {

    return {
        templateUrl: 'ng-views/calendar.html',

        link: function(scope, element, attribute) {

            scope.calendarDays = ['one', 'two', 'three'];
            $('main div.block').append(calendarDaysHTML);

        }
    }
});