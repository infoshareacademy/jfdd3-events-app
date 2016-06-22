var eventCalendarApp= angular.module('eventCalendarApp', ['ngRoute']);

eventCalendarApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home',{
            templateUrl:'ng-views/home.html'
        })
        .when('/calendar',{
            templateUrl:'ng-views/calendar.html'
        })
        .when('/event',{
            templateUrl:'ng-views/event.html',
            controller: 'eventController'
        })
        .when('/map',{
            templateUrl:'ng-views/map.html'
        })
        .otherwise({
            redirectTo:'/home.html'
        })
}]);

eventCalendarApp.controller('eventController', function($scope){
    
    $scope.events = [];
    $scope.updateEvents=updateEvents;
    function updateEvents(events){
        $scope.cardEvents=events;
    }
});





