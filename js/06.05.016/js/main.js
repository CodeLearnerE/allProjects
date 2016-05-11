// var theNumber = prompt("reqem daxil et","");
// var kv = theNumber*theNumber/2;

// alert("girdiyiniz ededin kvadratinin yarisi :" + kv );

// var age = prompt("yasinizi daxil edin");
// if (age >= 18 && age<80)
// 	alert("imtahana gire bilersen");
// else
// 	alert("ged ayna")
var bal = prompt( "sizin imtahanların orta nəticələri 0-100 ballıq sistemlə")
if (bal>=0 && bal<=100){
	if (bal<=35){
		var wiev = "kafi"
	}
	if (bal>35 && bal<=60){
		var wiev = "normal"
	}
	if (bal>60 && bal<=85){
		var wiev = "yaxsi"
	}
	if (bal>85 && bal<=100){
		var wiev = "ela"
	}
}
else{
	var wiev = "yeri ged ayna"
}

alert(wiev)