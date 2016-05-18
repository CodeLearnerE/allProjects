// piksel
var x = prompt('genişliyi piksellə yaz : ')
var a = prompt('div sayını yaz : ')
var b = prompt('sütun sayını yaz : ')
var d = prompt('Əsas div fon rəngini yaz : ')
var c = prompt('kiçik divlərin fon rəngini yaz : ')
var olcu = function(x,a,b){
	document.write('<div class="main" style="width:'+x+'px; height:auto; background:'+d+'">')
		y=x/b-5; 
	for (var i=1; i<=a; i++) {

	document.write('<div class="indiv" style="width:'+y+'px; height:100px; background:'+c+'"></div>')
	}
	
	document.write('</div>')
}
olcu(x,a,b)

// faizlə
// var x = prompt('genişliyi yaz faizlə : ')
// var a = prompt('div sayını yaz : ')
// var b = prompt('sütun sayını yaz : ')
// var d = prompt('Əsas div fon rəngini yaz : ')
// var c = prompt('kiçik divlərin fon rəngini yaz : ')
// var olcu = function(x,a,b){
// 	document.write('<div class="main" style="width:'+x+'%; height:auto; background:'+d+'">');
// 	y=(x/b)*2-1; 
// 	for (var i=1; i<=a; i++) {

// 	document.write('<div class="indiv" style="width:'+y+'%; height:100px; background:'+c+'"></div>');
// 	}
	
// 	document.write('</div>');
// }
// olcu(x,a,b)


// responsiv
// var x = prompt('genişliyi yaz (faizlə) : ')
// var a = prompt('div sayını yaz : ')
// var b = prompt('sütun sayını yaz : ')
// var d = prompt('Əsas div fon rəngini yaz : ')
// var c = prompt('kiçik divlərin fon rəngini yaz : ')
// var olcu = function(x,a,b){
// 	document.write('<div class="main" style="width:'+x+'%; height:800px; background:'+d+'">')
// 		y=(x/b)*2; 
// 	for (var i=1; i<=a; i++) {

// 	document.write('<div class="indiv" style="width:'+y+'%; height:100px; background:'+c+'">'+i+'</div>')
// 	}
	
// 	document.write('</div>')
// }
// document.write(olcu(x,a,b))



// a = "first"
// var ne = function(){
// 	a = "second"
	// return a;
	// document.write(a);
// };
// 	ne();
// 	document.write(a);
// var first = ["Code","Academy","Team","Second group"];
// for (i = 0;i<4; i++) {
// document.write(first[i]+"</br>");}
// var ad = "Etibar";
// var soyad = "Rustemzade";
// var yas = 25;
// var sinif = 2;



// var sname = ["Etibar","Rustemzade",25,2];
// var sname1 = ["Rahib","Rustemov",23,1];

// var persons = [sname,sname1]; 
// function t (){
// 	document.write("<table>");
// 	document.write("<tr><td>Ad</td><td>Soyad</td><td>Yas</td><td>Sinif</td></tr>")
// 	// for (i = 0; i < 2; i++) {
// 	document.write("<tr>");
// 		for (j = 0;j<4; j++){
// 		document.write("<td>"+persons[i][j]+"</td>")
// }
// 	document.write("</tr>")
// }
// 	document.write("</table");

// }
// t()
