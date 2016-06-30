'use strict';
var eventCalendarApp= angular.module('eventCalendarApp', ['ngRoute', 'angular-loading-bar','ngAnimate','gridster' ]);

eventCalendarApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/',{
            templateUrl:'ng-views/home.html'
        })
        .when('/calendar',{
            template: '<appcalendar></appcalendar>',
            //templateUrl:'ng-views/calendar.html'
            controller: 'gridsterCalendarController'
        })
        .when('/event',{
            templateUrl:'ng-views/club.html',
            controller: 'eventController'
        })
        .when('/map',{
            templateUrl:'ng-views/map.html'
        })
        .otherwise({
            redirectTo:'/calendar.html'
        });
}]);

eventCalendarApp.controller('eventController', function($scope, $http){
    $http.get('data/clubsWithEvents.json')
        .then(function(res){
            $scope.clubsWithEvents = res.data;
        });

    $scope.updateClubs = function () {
        console.log($scope);
        //$scope.club = club;
    }

});

eventCalendarApp.controller('gridsterCalendarController', function($scope, $http) {
    $http.get('data/clubsWithEvents.json')
        .then(function (response) {
            $scope.events = Array.prototype.concat.apply([], response.data.map(function (club) {
                return club.events;
            })).slice().map(function (event, index) {
                return {
                    nameEvent: event.nameEvent,
                    dateEvent: event.dateEvent,
                    photoEvent: event.photoEvent,
                    sizeX: 1,
                    sizeY: 1,
                    row: index % 1,
                    col: index % 8
                };
            });
            console.log($scope.events.length);
        });
});

eventCalendarApp.directive('appcalendar', function() {

    var pos = 0;

    return {
        templateUrl: 'ng-views/calendar.html',
        scope: false,

        link: function($scope, element, attribute) {

            Date.prototype.addDays = function(days) {
                var dat = new Date(this.valueOf());
                dat.setDate(dat.getDate() + days);
                return dat;
            };

            function getDates(startDate, stopDate) {
                var dateArray = [];
                var currentDate = startDate;
                while (currentDate <= stopDate) {
                    dateArray.push(currentDate);
                    currentDate = currentDate.addDays(1);
                }
                return dateArray;
            }

            function getCalendarDays(begin, howMany) {
                return getDates(new Date(Date.now()), new Date('2016-08-20')).map(function (date, index) {

                    function createButton(buttonClasses) {
                        return $('<div>')
                            .addClass(buttonClasses)
                            .append( $('<button>')
                                .addClass('calendar-button')
                                .text(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate())
                                .attr('data-cleardate', date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate())
                            )
                            .click(function() {
                                $scope.currentDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
                                $scope.$apply();
                            });
                    }

                    if (index < 2 + begin) {

                        return createButton('col-xs-3 col-sm-2 col-md-2 col-lg-1');

                    }
                    if (index >=2 + begin && index < 4 + begin) {
                        return createButton('hidden-xs col-sm-2 col-md-2 col-lg-1');

                    }
                    if (index >=4 + begin && index < 10 + begin) {

                        return createButton('hidden-xs hidden-sm hidden-md col-lg-1');

                    }
                    return date;
                }).slice(begin, howMany);
            }


            $.getJSON('data/clubsWithEvents.json', function(data){
                var dateEvents = [];
                $.each(data, function(key, value) {
                    for (var i=0; i<value.events.length; i++) {
                        //if (value.events[i].dateEvent)
                        console.log(value.events[i].dateEvent);
                        if(dataEvent === data-cleardate){
                            data.push( "<li id='" + key + "'>" + val + "</li>" );
                        }
                    }

                });
                //if(dateEvent === data-cleardate){
                //    dateEvents.push
                //}
                //}
                dataEvent.forEach(function(data){
                    var $events = $('<div class="events">');
                })
            });

            /* function showEventsData() {

             $('.event-thumbnail').empty().append($events);

             place.events.forEach(function (data) {
             .append($('<img class="event-img">').attr('src', event.photoEvent))
             .append($('<p class="eventTitle">').text(event.nameEvent))
             .append($('<p class="eventDate">').text(event.dateEvent))
             }*/


            $scope.moveLeft = function () {
                pos -= 1;
                $('main div.block').empty().append(getCalendarDays(pos, pos + 10));
            };

            $scope.moveRight = function () {
                pos += 1;
                $('main div.block').empty().append(getCalendarDays(pos, pos +  10));
            };

            //scope.calendarDays = ['one', 'two', 'three'];
            $('main div.block').empty().append(getCalendarDays(pos, pos + 10));

        }
    }
});



