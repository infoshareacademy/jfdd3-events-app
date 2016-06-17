(function (){
    var app= angular.module('nazwaApp', []);

    app.controller('nazwaControllera', ctrl);
    app.directive('eventCard', eventCardDirective);

    function ctrl($scope){
        $scope.eventList=[
            {name: "Bunkier", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, nameEvent:'Ludzie ulicy', photo:'img/foto-event-mini/17.jpg', date: '2016-7-1', idEvent:"ev-00"},
            {name: 'Mewa Towarzyska', city: 'Sopot', position: {lat: 54.443701, lng: 18.567403}, nameEvent:'Otwarcie ogródka', photo: 'img/foto-event-mini/1.jpg', date: '2016-7-3', idEvent:"ev-01"},
            {name: 'Absinthe', city: 'Gdansk', position: {lat: 54.351231, lng: 18.648594}, nameEvent:'Zaćmienie', photo: 'img/foto-event-mini/2.jpg', date: '2016-7-5', idEvent:"ev-02"},
            {name: 'Sfinks 700', city: 'Sopot', position: {lat: 54.448606, lng: 18.567710}, nameEvent:'Cudawianki', photo: 'img/foto-event-mini/3.jpg', date: '2016-7-7', idEvent:"ev-03"},
            {name: 'Kwadratowa', city: 'Gdansk', position: {lat: 54.370941, lng: 18.615147}, nameEvent:'Festival trafik', photo: 'img/foto-event-mini/4.jpg', date: '2016-7-9', idEvent:"ev-04"},
            {name: 'Dream Club', city: 'Sopot', position: {lat: 54.444478, lng: 18.566645}, nameEvent:'Pozytywnie techno', photo: 'img/foto-event-mini/5.jpg', date: '2016-7-12', idEvent:"ev-05"},
            {name: 'Bunkier', city: 'Gdansk', position: {lat: 54.354750, lng: 18.654678}, nameEvent:'Garden party', photo: 'img/foto-event-mini/6.jpg', date: '2016-7-14', idEvent:"ev-06"},
            {name: "B90", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, nameEvent:'Techno night', photo: 'img/foto-event-mini/17.jpg', date: '2016-7-10', idEvent:"ev-07"},
            {name: 'Czekoladowa', city: 'Sopot', position: {lat: 54.454168, lng: 18.554595}, nameEvent:'House Time', photo: 'img/foto-event-mini/7.jpg', date: '2016-7-8', idEvent:"ev-08"},
            {name: 'SPATiF', city: 'Sopot', position: {lat: 54.444402, lng: 18.567747}, nameEvent:'Destyroy Music', photo: 'img/foto-event-mini/8.jpg', date: '2016-7-9', idEvent:"ev-09"},
            {name: 'Protokultura', city: 'Gdansk', position: {lat: 54.443701, lng: 18.567403}, nameEvent:'Sunrise', photo: 'img/foto-event-mini/9.jpg', date: '2016-7-11', idEvent:"ev-10"},
            {name: 'Atelier', city: 'Sopot', position: {lat: 54.448602, lng: 18.568387}, nameEvent:'Ultra ', photo: 'img/foto-event-mini/10.jpg', date: '2016-7-13', idEvent:"ev-11"},
            {name: 'HAH', city: 'Sopot', position: {lat: 54.453064, lng: 18.564116}, nameEvent:'Tomoorowland', photo: 'img/foto-event-mini/11.jpg', date: '2016-7-15', idEvent:"ev-12"},
            {name: 'Wtedy', city: 'Sopot', position: {lat: 54.441044, lng: 18.563498}, nameEvent:'Rozpoczęcie sezonu', photo: 'img/foto-event-mini/12.jpg', date: '2016-7-17', idEvent:"ev-13"},
            {name: 'Dwie zmiany', city: 'Sopot', position: {lat: 54.443651, lng: 18.5643276}, nameEvent:'Scena odkryć', photo: 'img/foto-event-mini/13.jpg', date: '2016-7-19', idEvent:"ev-14"},
            {name: 'Scena', city: 'Sopot', position: {lat: 54.448498, lng: 18.568309}, nameEvent:'CD Haven', photo: 'img/foto-event-mini/14.jpg', date: '2016-7-21', idEvent:"ev-15"},
            {name: 'TAN', city: 'Sopot', position: {lat: 54.445276, lng: 18.567748}, nameEvent:'CazanTip', photo: 'img/foto-event-mini/15.jpg', date: '2016-7-23', idEvent:"ev-16"},
            {name: 'Libation ', city: 'Sopot', position: {lat: 54.444583, lng: 18.568565}, nameEvent:'History Mix ', photo: 'img/foto-event-mini/16.jpg', date: '2016-7-25', idEvent:"ev-17"},
            {name: 'ColorFun', city: 'Sopot', position: {lat: 54.454168, lng: 18.554595}, nameEvent:'House Time', photo: 'img/foto-event-mini/17.jpg', date: '2016-7-8', idEvent:"ev-19"},
            {name: 'Day-Mus', city: 'Sopot', position: {lat: 54.454168, lng: 18.554595}, nameEvent:'Time pre', photo: 'img/foto-event-mini/18.jpg', date: '2016-7-8', idEvent:"ev-18"}
        ]
    }



    function eventCardDirective(){
        return {
            restrict: 'E',
            templateUrl:'template-ng/eventCard.html'
        }

    }


})();


