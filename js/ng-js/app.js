'use strict';
var eventCalendarApp= angular.module('eventCalendarApp', ['ngRoute', 'angular-loading-bar']);

eventCalendarApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home',{
            templateUrl:'ng-views/home.html'
        })
        .when('/calendar',{
            templateUrl:'ng-views/calendar.html'
        })
        .when('/event',{
            templateUrl:'ng-views/club.html',
            controller: 'eventController'
        })
        .when('/map',{
            templateUrl:'ng-views/map.html'
        })
        .otherwise({
            redirectTo:'/home.html'
        });
}]);

eventCalendarApp.controller('eventController', function($scope, $http){
    $http.get('data/clubsWithEvents.json')
        .then(function(res){
            $scope.clubsWithEvents=res.data;
        });


    $scope.updateClubs=updateClubs;
    function updateClubs(club){
        $scope.club = club;
    }

});







