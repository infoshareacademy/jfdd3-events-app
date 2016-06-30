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
            })).slice(250).map(function (event, index) {
                return {
                    nameEvent: event.nameEvent,
                    dateEvent: event.dateEvent,
                    photoEvent: event.photoEvent,
                    sizeX: 1,
                    sizeY: 1,
                    row: index % 9,
                    col: index % 6

                };
            });
            console.log($scope.events.length);
        });
});





