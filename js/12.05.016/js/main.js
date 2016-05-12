var abc = "#";
for (var i=0;i<15;i++){
  document.write(abc+"<br>");
  abc=abc+"#";  
}
var a ="#";
for (var i=0;i<5;i++){
	a="#"+"&nbsp;"+"&nbsp;"+"#"+"&nbsp;"+"&nbsp;"+"#"+"&nbsp;"+"&nbsp;"+"#";
	document.write(a+"<br>");
	a="&nbsp;"+"&nbsp;"+"#"+"&nbsp;"+"&nbsp;"+"#"+"&nbsp;"+"&nbsp;"+"#"+"&nbsp;"+"&nbsp;"+"#";
	document.write(a+"<br>");
}


var i=0;
(function efqanFunc(){
	i++;
	document.write(i+"Efqan<br>");
	if(i<500){
		efqanFunc();
	}
})();

(function efqanFunc(){
	// j++;
	for (var i = 1; i<=500; i++) {
		document.write(i+"Efqan<br>");
	}
	
})();