(function (){
    var app= angular.module('nazwaApp', []);

    app.controller('nazwaControllera', ctrl);
    app.directive('eventCard', eventCardDirective);

    function ctrl($scope){
        $scope.name="Marcin"

    }



    function eventCardDirective(){
        return {
            restrict: 'E',
            templateUrl:'template-ng/eventCard.html'
        }

    }


})();