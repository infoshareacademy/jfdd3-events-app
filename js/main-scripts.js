'use strict',
var all
var allEvents= [
    {
        name:'B-party',
        place:'Sopot',
        price:50,
        picture:'event-image01'},

    {
        name:'5-urodziny klubu',
        place:'Gdansk',
        price:'free',
        picture:'event-image02'},

    {
        name:'Disco Party',
        place:'Gdynia',
        price:25,
        picture:'event-image03'},

    {
        name:'18-Antka',
        place:'Sopot',
        price:'free',
        picture:'event-image04'},

    {
        name:'Biba do samego rana',
        place:'Gdynia',
        price:'50',
        picture:'event-image05'},

    {
        name:'House Party',
        place:'Gdansk',
        price:'19',
        picture:'event-image02'},

    {
        name:'18-Antka',
        place:'Gdynia',
        price:'free',
        picture:'event-image02'},

    {
        name:'18-Antka',
        place:'Gdynia',
        price:'free',
        picture:'event-image02'},

    {
        name:'18-Antka',
        place:'Gdynia',
        price:'free',
        picture:'event-image02'},

    {
        name:'18-Antka',
        place:'Gdynia',
        price:'free',
        picture:'event-image02'},

    {
        name:'18-Antka',
        place:'Gdynia',
        price:'free',
        picture:'event-image02'},


];


function createEvent(name, place, date, description, picture) {
    return {
        name: name,
        place: place,
        date: date,
        description: description,
        picture: picture
    }
}



