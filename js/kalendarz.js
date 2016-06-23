window.onload = createDays;

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
		
	data = data + '<div class="col-xs-3 col-sm-2 col-md-2 col-lg-1" onclick = "sprawdz(+i+) "id="+element+">+daty[i]+</div>'
	
	}	
	for(i = 2; i<4; i++){
		
	data = data + '<div class="hidden-xs col-sm-2 col-md-2 col-lg-1">+daty[i]+</div>'
	
	}	
	for(i = 4; i<9; i++){
		
	data = data + '<div class="hidden-xs hidden-sm hidden-md col-lg-1">+daty[i]+</div>'
	
	}
	
		
	document.getElementsByName("block").innerHTML = data;

	wypisz_date();
		
}


function sprawdz(nr)
{
	//alert(nr);
	
	
	
}