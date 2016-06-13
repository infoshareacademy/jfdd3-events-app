'use strict';

var allClubs = [
    {name: "Bunkier", city: "Gdansk"},
    {name: 'Desdemona', city: 'Gdynia'},
    {name: 'Mewa Towarzyska', city: 'Sopot'},
    {name: 'Absinthe', city: 'Gdansk'},
    {name: 'Pokład', city: 'Gdynia'},
    {name: 'Parlament', city: 'Gdansk'},
    {name: 'Sfinx 700', city: 'Sopot'},
    {name: 'Kwadratowa', city: 'Gdansk'},
    {name: 'Dream Club', city: 'Sopot'},
    {name: 'Atlantic', city: 'Gdynia'},
    {name: 'Ucho', city: 'Gdynia'},
    {name: 'Bunkier', city: 'Gdansk'},
    {name: 'Makahik', city: 'Sopot'},
    {name: 'Blues Club', city: 'Gdynia'},
    {name: 'Universal', city: 'Gdynia'},
    {name: 'Redlight', city: 'Gdansk'},
    {name: "B90", city: "Gdansk"},
    {name: 'Czekoladowa', city: 'Sopot'},
    {name: 'SPATiF', city: 'Sopot'},
    {name: 'Protokultura', city: 'Gdansk'},
    {name: 'Atelier', city: 'Sopot'},
    {name: 'Żak', city: 'Gdansk'},
    {name: 'HAH', city: 'Sopot'},
    {name: 'Lawendowa 8', city: 'Gdansk'},
    {name: '3 siostry', city: 'Sopot'},
    {name: 'Lustra', city: 'Gdynia'},
    {name: 'Wtedy', city: 'Sopot'},
    {name: 'Stacja delux', city: 'Gdansk'},
    {name: 'Unique', city: 'Sopot'},
    {name: 'Dwie zmiany', city: 'Sopot'},
    {name: 'Scena', city: 'Sopot'},
    {name: 'TAN', city: 'Sopot'},
    {name: 'Libation ', city: 'Sopot'},
];
var allEvents = [
    {name: 'Ludzie ulicy', photo: '', data: ''},
    {name: 'Otwarcie ogródka', photo: '', data: ''},
    {name: 'Zaćmienie', photo: '', data: ''},
    {name: 'Cudawianki', photo: '', data: ''},
    {name: 'Pozytwynie wpłynie TECHNO', photo: ''},
    {name: 'Ziemia to za mało', photo: '', data: ''},
    {name: 'Festiwal trafik', photo: '', data: ''},
    {name: 'Garden party', photo: '', data: ''},
    {name: 'Wieczor piwa ', photo: '', data: ''},
    {name: 'Techno Night', photo: '', data: ''},
    {name: 'House Time', photo: '', data: ''},
    {name: 'Muzyka elektroniczna', photo: '', data: ''},
    {name: 'Destroy music', photo: '', data: ''},
    {name: 'Rozpoczecie seonu', photo: '', data: ''},
    {name: 'Zmiana miejsc', photo: '', data: ''},
    {name: 'Wystywa Fotografi', photo: '', data: ''},
    {name: 'Koncert na dachu', photo: '', data: ''},
    {name: 'Scena odkryć', photo: '', data: ''},
    {name: 'VHS HELL', photo: '', data: ''},
    {name: 'CD HEAVEN', photo: '', data: ''},
    {name: 'Wieczór', photo: '', data: ''},
    {name: 'Boat Party', photo: '', data: ''},
    {name: 'Disco 80', photo: '', data: ''},
    {name: 'Dance Time', photo: '', data: ''},

];


function generateEvents(events, clubs) {

    var newEvents = [];

    for (var i = 0; i < 25; i++) {
        var club = clubs[Math.round(Math.random() * allClubs.length - 1)];
        var event = events[Math.round(Math.random() * allEvents.length - 1)];
        club.eventName = event['name'];
        club.eventPhoto = event.photo;
        club.eventData = event.data;
        
        //console.log(JSON.stringify(club));

        newEvents.push(club);


    }
    //console.log(newEvents);
    return newEvents;
}

