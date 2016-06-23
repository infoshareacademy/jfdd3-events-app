/**
 * Created by elwirak on 17.06.16.
 */
/**
 * Created by Elwira on 2016-06-14.
 */


//window.onload = createDays;
//
//$(document).ready(function() {
//    createDays();
//});


var daty = new Array(30);
daty[0] = "01.07";
daty[1] = "02.07";
daty[2] = "03.07";
daty[3] = "04.07";
daty[4] = "05.07";
daty[5] = "06.07";
daty[6] = "07.07";
daty[7] = "08.07";
daty[8] = "09.07";
daty[9] = "10.07";
daty[10] = "11.07";
daty[11] = "12.07";
daty[12] = "13.07";
daty[13] = "14.07";
daty[14] = "15.07";
daty[15] = "16.07";
daty[16] = "17.07";
daty[17] = "18.07";
daty[18] = "19.07";
daty[19] = "20.07";
daty[20] = "21.07";
daty[21] = "22.07";
daty[22] = "23.07";
daty[23] = "24.07";
daty[24] = "25.07";
daty[25] = "26.07";
daty[26] = "27.07";
daty[27] = "28.07";
daty[28] = "29.07";
daty[29] = "30.07";
daty[30] = "31.07";


function createDays(){

    var data = "";

    for(i = 0; i<2; i++){

        var element = "dat" + i;

        data = data + '<div class="col-xs-3 col-sm-2 col-md-2 col-lg-1"><button class="calendar-button">+daty[i]+</button></div>'

    }
    for(i = 2; i<4; i++){

        data = data + '<div class="hidden-xs col-sm-2 col-md-2 col-lg-1"><button class="calendar-button">+daty[i]+</button><</div>'

    }
    for(i = 4; i<9; i++){

        data = data + '<div class="hidden-xs hidden-sm hidden-md col-lg-1"><button class="calendar-button">+daty[i]+</button><</div>'

    }


    debugger;
    $('.block').append(data);
    //document.getElementsByName("block").innerHTML = data;

    //wypisz_date();

}


function sprawdz(nr)
{
    //alert(nr);



}




var position = 0, $block = $(".block"), $left = $("#left"), $right = $("#right");

$right.click(function () {
    var rightPoint = $left.position().right - $block.width();
    if( $block.position().left > rightPoint ){
        $block.css('right', leftPoint + 'px');
    }else{
        $block.animate({"right": "-=150px"}, "slow");
    }

});



$left.click(function () {
    var rightPoint = $right.position().left - $block.width();
    if( $block.position().left < rightPoint ){
        $block.css('left', rightPoint + 'px');
    }else{
        $block.animate({"left": "-=150px"}, "slow");
    }
});




//window.onload = start;


Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
};

function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(currentDate)
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

var result = getDates(new Date('2016-07-01'), new Date('2016-07-31')).map(function (date, index) {
    if (index < 2) {
        return $('<div class="col-xs-3 col-sm-2 col-md-2 col-lg-1"><button class="calendar-button"></button></div>').text(date).click(function () {
            //
        });
    };
    if (index >=2 && index < 4) {
        return $('<div class="hidden-xs col-sm-2 col-md-2 col-lg-1"><button class="calendar-button"></button></div>').text(date).click(function () {
            //
        });
    };
    if (index >=4 && index < 10) {
        return $('<div class="hidden-xs hidden-sm hidden-md col-lg-1"><button class="calendar-button"></button></div>').text(date).click(function () {
            //
        });
    };
    return date;
});

$('#navigation').append(result);
/*
var dateArray = getDates(new Date(), (new Date()).addDays(6));
for (i = 0; i < dateArray.length; i ++ ) {
    alert (dateArray[i]);
}


function start(){
    document.getElementById("block").innerHtml = function(){
        var wszystkie_daty = [];
        if($right.click){
            wszystkie_daty.push()
            wszystkie_daty.shift()
            dzien = {
                pojemnik:x,
                zawartosc:dzien
            }
        } else if($left.click){
            wszystkie_daty.pop()
            wszystkie_daty.unshift()
    }


}

*/
