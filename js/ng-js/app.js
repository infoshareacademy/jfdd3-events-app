'use strict';
var eventCalendarApp= angular.module('eventCalendarApp', ['ngRoute', 'angular-loading-bar','ngAnimate' ]);

eventCalendarApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/',{
            templateUrl:'ng-views/home.html'
        })
        .when('/calendar',{
            template: '<appcalendar></appcalendar>'
            //templateUrl:'ng-views/calendar.html'
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





