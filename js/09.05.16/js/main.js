var number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
var number = 0;
while (number <= 12) {
  document.write(number  );
  number = number + 2;
}
var number = 0;
while (number <= 12) {
  alert(number  );
  number = number + 2;
}
var a = 1;
while(a<=10){
	document.write(a+" - salam dunya");
	console.log(a+" - salam dunya");
	a = a + 1
}
var a=#;
while(a=a+a){
	document.write(a+)
}
var a=1;
while(a<=21){
	document.write(a+ "-")
	a=a+2;
}
var a = 1;
var son = Number (prompt("nomre yaz",""));
	while(a < son){
		console.log(a);
		a=a+2;
}
var basla = Number (prompt("giris nomre yaz",""));
var son = Number (prompt("son nomre yaz",""));
while(basla <= son){
	if (basla % 2 === 1) {
	console.log(basla)}
	basla = basla + 1;
}
var basla = Number (prompt("giris nomre yaz",""));
var son = Number (prompt("son nomre yaz",""));
while(basla <= son){
	if (basla % 2 === 1) {
	console.log("tek - "+basla)
}	
	else{
	console.log("cut - "+basla)}
	basla = basla + 1;
}
var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
for ( var i = 1; i<=15; i++)
	document.write("nomre - "+i+"<br>")
var x = "";
for (var i = 0; i <=8 ; i++) {
	x=x+"#";
	console.log(x)
}

var basla = Number (prompt("eded",""));
var son = Number (prompt("ustu",""));
for ( var i = 1;i<=son; i=i+i ){
	x=basla*basla
	console.log(x)
}
var cube = function(x){
	return x*x*x;
};
document.write(cube(5));
var x = Number (prompt("reqemi daxil et : "))
var reqem = function(x){
	if (x % 2 === 1) {
	return "tekdir";
	}
	else{
	return "cutdur";
	}

};
document.write(reqem(x));
var ad =(prompt("adi daxil et : "))
var soyad =(prompt("soyadi daxil et : "))
var x = function(ad, soyad){
	return ad+' '+soyad;
};
document.write(x(ad, soyad));
var x = Number (prompt("reqem",""));
var y = Number (prompt("reqem",""));
var basla = function(x, y){
	return x*x+y;

};
document.write(basla(x, y))

var y = Number (prompt("width : "))
var a = Number (prompt("height : "))
var c = "1";
var main = function(y,a){
	var x=y/3;
	var b=a/3;
	var d=c/3;
	return '<div class="main" style="height:'+a+'px; width:'+y+'px; margin-left:'+c+'px; background:black"><div style="width:'+x+'px; height:'+b+'px; margin-left:'+d+'px; background:red;"></div><div style="width:'+x+'px; height:'+b+'px; margin-left:'+d+'px;background:green;"></div style="width:'+x+'px; height:'+b+'px; margin-left:'+d+'px;background:yellow;"><div style="width:'+x+'px; height:'+b+'px; margin-left:'+d+'px;background:silver;"></div><div style="width:'+x+'px; height:'+b+'px; margin-left:'+d+'px;background:blue;"></div><div style="width:'+x+'px; height:'+b+'px; margin-left:'+d+'px;background:red;"></div><div style="width:'+x+'px; height:'+b+'px; margin-left:'+d+'px;background:green;"></div></div>';
}
document.write(main(y,a,c))
