// var f = 0;
// var g = 1;

// for (i=0; i<10; i++) {
//  document.write(f+"<br>");

//  f = f+g;
//  g = f-g;

// }



var telebe1 = ["Sureyya","Sadiqova",23];
var telebe2 = ["Etibar","Rustemzade", 25];
var telebe3 = ["Rufet","Zeynalli",21];
var telebe4 = ["Rufet","Zeynalli",21];
var telebe5 = ["Rufet","Zeynalli",21];
telebe1[0]="Aysel";
telebe2[2]=40;
telebe5[1]="Eliyev"
var telebeler = [telebe1,telebe2,telebe3,telebe4,telebe5];
function t (){
	document.write("<table border='1'>");
	document.write("<thead><tr><th>Ad</th><th>Soyad</th><th>yas</th></tr></thead>");
	document.write("<tbody>");
	for(i=0;i<telebeler.length;i++){
		document.write("<tr>");
			for(j=0;j<3;j++){
				document.write("<td>"+telebeler[i][j]+"</td>");
			}
		document.write("</tr>");

	}
	document.write("</tbody>");
	document.write("<table>");

}
t();