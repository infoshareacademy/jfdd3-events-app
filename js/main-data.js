'use strict';


var allClubs = [
    {
        nameClub: "Bunkier",
        city: "Gdansk",
        photoClub: "",
        position: {lat: 54.354750, lng: 18.654678},
        icon: 'img/map-ping.png'
    },
    {
        nameClub: 'Mewa Towarzyska',
        city: 'Sopot',
        photoClub: "",
        position: {lat: 54.443701, lng: 18.567403},
        icon: 'img/map-ping.png'
    },
    {
        nameClub: 'Absinthe',
        city: 'Gdansk',
        photoClub: "",
        position: {lat: 54.351231, lng: 18.648594},
        icon: 'img/map-ping.png'
    },
    {
        nameClub: 'Sfinks 700',
        city: 'Sopot',
        photoClub: "",
        position: {lat: 54.448606, lng: 18.567710},
        icon: 'img/map-ping.png'
    },
    {
        nameClub: 'Kwadratowa',
        city: 'Gdansk',
        photoClub: "",
        position: {lat: 54.370941, lng: 18.615147},
        icon: 'img/map-ping.png'
    },
    {
        nameClub: 'Dream Club',
        city: 'Sopot',
        photoClub: "",
        position: {lat: 54.444478, lng: 18.566645},
        icon: 'img/map-ping.png'
    },
    {
        nameClub: 'Bunkier',
        city: 'Gdansk',
        photoClub: "",
        position: {lat: 54.354750, lng: 18.654678},
        icon: 'img/map-ping.png'
    },
    {
        nameClub: "B90",
        city: "Gdansk",
        photoClub: "",
        position: {lat: 54.354750, lng: 18.654678},
        icon: 'img/map-ping.png'
    },
    {
        nameClub: 'Czekoladowa',
        city: 'Sopot',
        photoClub: "",
        position: {lat: 54.454168, lng: 18.554595},
        icon: 'img/map-ping.png'
    },
    {
        nameClub: 'SPATiF',
        city: 'Sopot',
        photoClub: "",
        position: {lat: 54.444402, lng: 18.567747},
        icon: 'img/map-ping.png'
    },
    {
        nameClub: 'Protokultura',
        city: 'Gdansk',
        photoClub: "",
        position: {lat: 54.443701, lng: 18.567403},
        icon: 'img/map-ping.png'
    },
    {
        nameClub: 'Atelier',
        city: 'Sopot',
        photoClub: "",
        position: {lat: 54.448602, lng: 18.568387},
        icon: 'img/map-ping.png'
    },
    {
        nameClub: 'HAH',
        city: 'Sopot',
        photoClub: "",
        position: {lat: 54.453064, lng: 18.564116},
        icon: 'img/map-ping.png'
    },
    {
        nameClub: 'Wtedy',
        city: 'Sopot',
        photoClub: "",
        position: {lat: 54.441044, lng: 18.563498},
        icon: 'img/map-ping.png'
    },
    {
        nameClub: 'Dwie zmiany',
        city: 'Sopot',
        photoClub: "",
        position: {lat: 54.443651, lng: 18.5643276},
        icon: 'img/map-ping.png'
    },
    {
        nameClub: 'Scena',
        city: 'Sopot',
        photoClub: "",
        position: {lat: 54.448498, lng: 18.568309},
        icon: 'img/map-ping.png'
    },
    {
        nameClub: 'TAN',
        city: 'Sopot',
        photoClub: "",
        position: {lat: 54.445276, lng: 18.567748},
        icon: 'img/map-ping.png'
    },
    {
        nameClub: 'Libation ',
        city: 'Sopot',
        photoClub: "",
        position: {lat: 54.444583, lng: 18.568565},
        icon: 'img/map-ping.png'
    }
];
var allEvents = [
    {nameEvent: 'Ludzie ulicy', photoEvent: 'img/foto-event-mini/1.jpg', dateEventEvent: '2016-7-4'},
    {nameEvent: 'Otwarcie ogródka', photoEvent: 'img/foto-event-mini/2.jpg', dateEvent: '2016-7-5'},
    {nameEvent: 'Zaćmienie', photoEvent: 'img/foto-event-mini/3.jpg', dateEvent: '2016-7-6'},
    {nameEvent: 'Cudawianki', photoEvent: 'img/foto-event-mini/4.jpg', dateEvent: '2016-7-4'},
    {nameEvent: 'Pozytwynie', photoEvent: 'img/foto-event-mini/5.jpg', dateEvent: '2016-7-5'},
    {nameEvent: 'Ziemia to za mało', photoEvent: 'img/foto-event-mini/6.jpg', dateEvent: '2016-7-6'},
    {nameEvent: 'Festiwal trafik', photoEvent: 'img/foto-event-mini/7.jpg', dateEvent: '2016-7-7'},
    {nameEvent: 'Garden party', photoEvent: 'img/foto-event-mini/8.jpg', dateEvent: '2016-7-8'},
    {nameEvent: 'Wieczor piwa ', photoEvent: 'img/foto-event-mini/9.jpg', dateEvent: '2016-7-9'},
    {nameEvent: 'Techno Night', photoEvent: 'img/foto-event-mini/10.jpg', dateEvent: '2016-7-10'},
    {nameEvent: 'House Time', photoEvent: 'img/foto-event-mini/11.jpg', dateEvent: '2016-7-11'},
    {nameEvent: 'Muzyka elektroniczna', photoEvent: 'img/foto-event-mini/12.jpg', dateEvent: '2016-7-12'},
    {nameEvent: 'Destroy music', photoEvent: 'img/foto-event-mini/13.jpg', dateEvent: '2016-7-13'},
    {nameEvent: 'Rozpoczecie seonu', photoEvent: 'img/foto-event-mini/14.jpg', dateEvent: '2016-7-14'},
    {nameEvent: 'Zmiana miejsc', photoEvent: 'img/foto-event-mini/15.jpg', dateEvent: '2016-7-15'},
    {nameEvent: 'Wystywa Fotografi', photoEvent: 'img/foto-event-mini/16.jpg', dateEvent: '2016-7-16'},
    {nameEvent: 'Koncert na dachu', photoEvent: 'img/foto-event-mini/17.jpg', dateEvent: '2016-7-17'},
    {nameEvent: 'Scena odkryć', photoEvent: 'img/foto-event-mini/18.jpg', dateEvent: '2016-7-18'},
    {nameEvent: 'VHS HELL', photoEvent: 'img/foto-event-mini/19.jpg', dateEvent: '2016-7-19'},
    {nameEvent: 'CD HEAVEN', photoEvent: 'img/foto-event-mini/12.jpg', dateEvent: '2016-7-20'},
    {nameEvent: 'Wieczór', photoEvent: 'img/foto-event-mini/21.jpg', dateEvent: '2016-7-21'},
    {nameEvent: 'Boat Party', photoEvent: 'img/foto-event-mini/22.jpg', dateEvent: '2016-7-22'},
    {nameEvent: 'Disco 80', photoEvent: 'img/foto-event-mini/23.jpg', dateEvent: '2016-7-23'},
    {nameEvent: 'Dance Time', photoEvent: 'img/foto-event-mini/24.jpg', dateEvent: '2016-7-24'},
    {nameEvent: 'Escape to freedom', photoEvent: 'img/foto-event-mini/25.jpg', dateEvent: '2016-7-25'},
    {nameEvent: 'Blow party', photoEvent: 'img/foto-event-mini/26.jpg', dateEvent: '2016-7-26'},
    {nameEvent: 'Sensation ', photoEvent: 'img/foto-event-mini/27.jpg', dateEvent: '2016-7-27'},
    {nameEvent: 'Tech-time', photoEvent: 'img/foto-event-mini/28.jpg', dateEvent: '2016-7-28'},
    {nameEvent: 'House Time', photoEvent: 'img/foto-event-mini/29.jpg', dateEvent: '2016-7-29'},
    {nameEvent: 'Muzyka Fun', photoEvent: 'img/foto-event-mini/30.jpg', dateEvent: '2016-7-30'},
    {nameEvent: 'Stereo Beats', photoEvent: 'img/foto-event-mini/31.jpg', dateEvent: '2016-7-1'},
    {nameEvent: 'Hard Sound', photoEvent: 'img/foto-event-mini/32.jpg', dateEvent: '2016-7-2'},
    {nameEvent: 'Vinyl sets', photoEvent: 'img/foto-event-mini/33.jpg', dateEvent: '2016-7-3'},
    {nameEvent: 'Funky split', photoEvent: 'img/foto-event-mini/34.jpg', dateEvent: '2016-7-4'},
    {nameEvent: 'Rio Carnival', photoEvent: 'img/foto-event-mini/35.jpg', dateEvent: '2016-7-5'},
    {nameEvent: 'Holi fest', photoEvent: 'img/foto-event-mini/36.jpg', dateEvent: '2016-7-6'},
    {nameEvent: 'Day off', photoEvent: 'img/foto-event-mini/37.jpg', dateEvent: '2016-7-7'},
    {nameEvent: 'Fusion', photoEvent: 'img/foto-event-mini/38.jpg', dateEvent: '2016-7-8'},
    {nameEvent: 'Balaton Sound', photoEvent: 'img/foto-event-mini/39.jpg', dateEvent: '2016-7-9'},
    {nameEvent: 'Exit', photoEvent: 'img/foto-event-mini/40.jpg', dateEvent: '2016-7-10'},
    {nameEvent: 'Secret Party', photoEvent: 'img/foto-event-mini/41.jpg', dateEvent: '2016-7-11'},
    {nameEvent: 'Creamfields', photoEvent: 'img/foto-event-mini/42.jpg', dateEvent: '2016-7-12'},
    {nameEvent: 'Mysteryland', photoEvent: 'img/foto-event-mini/43.jpg', dateEvent: '2016-7-13'},
    {nameEvent: 'Time Out', photoEvent: 'img/foto-event-mini/44.jpg', dateEvent: '2016-7-14'},
    {nameEvent: 'Jungle Boogie', photoEvent: 'img/foto-event-mini/45.jpg', dateEvent: '2016-7-15'},
    {nameEvent: 'Pinacolada party', photoEvent: 'img/foto-event-mini/46.jpg', dateEvent: '2016-7-16'},
    {nameEvent: 'Flow Mind', photoEvent: 'img/foto-event-mini/47.jpg', dateEvent: '2016-7-17'},
    {nameEvent: 'Opener ', photoEvent: 'img/foto-event-mini/48.jpg', dateEvent: '2016-7-18'},
    {nameEvent: 'Techno Night', photoEvent: 'img/foto-event-mini/49.jpg', dateEvent: '2016-7-19'},
    {nameEvent: 'House Time', photoEvent: 'img/foto-event-mini/50.jpg', dateEvent: '2016-7-20'}
];


var clubsWithEvents = allClubs.map(function (club) {
    var howMany = Math.round(Math.random() * 10) + 10;
    var clubWithEvents = {
        name: club.nameClub,
        city: club.city,
        photoClub: club.photoClub,
        position: club.position,
        icon: club.icon,

        events: []

    };

    for (var i = 0; i < howMany; i += 1) {

        var randomIndex=Math.round(Math.random() * (allEvents.length - 1));
        var randomIndex1=Math.round(Math.random() * (allEvents.length - 1));
        var randomIndex2=Math.round(Math.random() * (allEvents.length - 1));
        var randomPrice= (Math.round(Math.random()*100));
        var randomEvent={};

        randomEvent.nameEvent= allEvents[randomIndex]['nameEvent'];
        randomEvent.photoEvent=allEvents[randomIndex1]['photoEvent'];
        randomEvent.dateEvent=allEvents[randomIndex2]['dateEvent'];
        randomEvent.priceEvent=randomPrice + ' zł';

        clubWithEvents.events.push(randomEvent);

        }

    return clubWithEvents;
});

