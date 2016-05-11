// var f = 0;
// var g = 1;

// for (i=0; i<10; i++) {
//  document.write(f+"<br>");

//  f = f+g;
//  g = f-g;

// }



// var telebe1 = ["Sureyya","Sadiqova",23];
// var telebe2 = ["Etibar","Rustemzade", 25];
// var telebe3 = ["Rufet","Zeynalli",21];
// var telebe4 = ["Rufet","Zeynalli",21];
// var telebe5 = ["Rufet","Zeynalli",21];
// telebe1[0]="Aysel";
// telebe2[2]=40;
// telebe5[1]="Eliyev"
// var telebeler = [telebe1,telebe2,telebe3,telebe4,telebe5];
// function t (){
// 	document.write("<table border='1'>");
// 	document.write("<thead><tr><th>Ad</th><th>Soyad</th><th>yas</th></tr></thead>");
// 	document.write("<tbody>");
// 	for(i=0;i<telebeler.length;i++){
// 		document.write("<tr>");
// 			for(j=0;j<3;j++){
// 				document.write("<td>"+telebeler[i][j]+"</td>");
// 			}
// 		document.write("</tr>");

// 	}
// 	document.write("</tbody>");
// 	document.write("<table>");

// }
// t();


// var cut=[];
// var tek=[];
// for (var i=1;i<=100;i++){
// 	if(i%2===0){
// 		cut.push(i);
// 	}
// 	else {
// 		tek.push(i);
// 	}
// }

// 	document.write("<table border='1' style=width:50px;>");
// 	document.write("<thead><tr><th>Tek</th><th>Cut</th></tr></thead>");
// 		document.write("<tbody>");
// 			for (var j = 0;j<tek.length; j++) {
// 			document.write("<tr><td>"+tek[j]+"</td><td>"+cut[j]+"</td></tr>");
// 		}
// 		document.write("<tbody>");
// 	document.write("</table>");
// var esas = {
// 	bir: [2,3,4,5,6],
// 	iki: [7,8,9,10,11],
// 	yaz: function(){
// 	for(var i=0;i<this.iki.length;i++){
// 		var x=this.bir[i]*this.iki[i];
// 		console.log(x);
// 	}
// }}
// esas.yaz();

	var width=[200,400,600,500,1000];
	var height=[100,100,100,200,50];
	var sentence=['adsdadaslfa;lfkl;sdkfd','aaaaaaa','Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmodtempor incididunt ut labore et dolore magna aliqua','Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmodtempor incididunt ut labore et dolore magna aliqua','Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmodtempor incididunt ut labore et dolore magna aliqua'];
	var color=['blue','red','green','grey','pink'];


	var data={
		box:function(width,height,sentence,color){
			this.width=width;
			this.height=height;
			this.sentence=sentence;
			this.color=color;
			console.log(this.widths);

			for(var i=0;i<this.width.length;i++){
				document.write('<div style=width:'+this.width[i]+'px;height:'+this.height[i]+'px;background:'+this.color[i]+';>'+this.sentence[i]+'</div>');

			}

		}
	}
	data.box(width,height,sentence,color);
