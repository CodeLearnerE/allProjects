a=true;
function switch_btn(){
	
	if(a){
		var float="right";
		var color="#91B136";
		var txt="ON";
		var b_color="white";
		var txt_position="left"
		document.close();
		a=false;
	}else{
		var float="left";
		var color="#A1A1A1";
		var txt="OFF"
		var b_color="black";
		var txt_position="right"
		document.close();
		a=true;
	}
	document.write("<div class='body'style='height:1000px; width:100%; background:"+b_color+";'>")
	document.write("<div class='main' style='height: 280px;width: 400px;background: #E3E3E4;margin: auto;position: relative;top:170px;'>");
	document.write("<div class='switch' style='position: relative;height: 30px;width: 100px;background: "+color+";margin: auto;border-radius: 15px;text-align: "+txt_position+";color: white;top: 45%;transition-timing-function: linear 1s;'>");
	document.write("<h3 style='position: relative;top:5px;left:10px;margin-right:15px;'>"+txt+"</h3>");
	document.write("<div class='btn' onclick='switch_btn()' style='position: relative;height: 16px;width: 16px;background: #E3E3E4;border:10px solid;border-radius: 50%;bottom: 44px;float: "+float+";'></div></div></div>");
	document.write("</div>")
}
switch_btn();


// document.write("<div class='main' style='height: 280px;width: 400px;background: #E3E3E4;margin: auto;position: relative;top:170px;'>");
// document.write("<div class='switch' style='position: relative;height: 30px;width: 100px;background: "+b+";margin: auto;border-radius: 15px;text-align: center;color: white;top: 45%;transition-timing-function: linear;'>");
// document.write("<h3 style='position: relative;top:5px;'>"+c+"</h3>");
// document.write("<div class='btn' onclick='switch_btn' style='position: relative;height: 16px;width: 16px;background: #E3E3E4;border:10px solid;border-radius: 50%;bottom: 25px;float: "+a+";transition-timing-function: linear;'></div></div></div>");
