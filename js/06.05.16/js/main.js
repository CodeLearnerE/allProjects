var gun = prompt("işlədiyiniz günləri daxil edin : ")
if(gun>0 && gun<=31){
 	var gelir = prompt("gunluk gəliri daxil din : ")
 	if (gelir*gun<1000){
 		var goster =gelir*gun-gelir*gun*0.2;
 	}
 	else{
 		var goster =gelir*gun- gelir*gun*0.25;
 	}
 	alert("sizin maas : "+goster)
}
else {
	alert("günü duügün daxil edin")
}
