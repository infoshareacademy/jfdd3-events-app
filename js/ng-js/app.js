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
                    row: index % 4,
                    col: index % 15
                };
            });
        });
    //$scope.standardItems = [
    //    { sizeX: 2, sizeY: 1, row: 0, col: 0 },
    //    { sizeX: 2, sizeY: 2, row: 0, col: 2 },
    //    { sizeX: 1, sizeY: 1, row: 0, col: 4 },
    //    { sizeX: 1, sizeY: 1, row: 0, col: 5 },
    //    { sizeX: 2, sizeY: 1, row: 1, col: 0 },
    //    { sizeX: 1, sizeY: 1, row: 1, col: 4 },
    //    { sizeX: 1, sizeY: 2, row: 1, col: 5 },
    //    { sizeX: 1, sizeY: 1, row: 2, col: 0 },
    //    { sizeX: 2, sizeY: 1, row: 2, col: 1 },
    //    { sizeX: 1, sizeY: 1, row: 2, col: 3 },
    //    { sizeX: 1, sizeY: 1, row: 2, col: 4 }
    //];
});





