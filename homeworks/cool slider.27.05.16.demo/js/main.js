 $( document ).ready(function() {
  	for(var i=0;i<=7;i++){
  		$(".main").eq(0).append('<div class="news'+(i+1)+' a" name="myDivs"><div name="myDivs"></div><div name="myDivs"></div></div>')
  		
  		// $(".main div").eq(i+1).css({'z-index':''+i+1+'','background':'#1FAF6D','width':'400px','height':'150px','position':'absolute','border-radius':'5px'})
  	}
  	// setInterval('$(".fa-angle-down").click()', 2000);
});

$(".addNews").click(function() {
	var myNews =$(".myNews").val()
	$(".news4 div:first-Child").append("<p>"+myNews+"</p>")
	console.log(myNews)
});

var a=1;
var myClass=["news1 a","news2 a","news3 a","news4 a","news5 a","news6 a","news7 a"];


$(".fa-angle-up").click(function() {

  	if (a<=7 && a>=1) {
  		myClass.pop();
		myClass.splice(0, 0, 'news'+a+' a');
  		console.log(myClass)
  	for(var i=0;i<=7;i++){
  	$(".a").eq(i).attr("class",""+myClass[i]+"")
  		
  }
 }
 else {
 	return a=7;
 }
  return a-=1;

});


$(".fa-angle-down").click(function() {

  	if (a<=7) {
  		myClass.push("news"+a+" a")
  		myClass.splice(0, 1);
  		console.log(myClass)
  	for(var i=0;i<=7;i++){
  	$(".a").eq(i).attr("class",""+myClass[i]+"")
  		
  }
 }
 else {
 	return a=1;
 }
  return a+=1;

});


// $( ".main" ).click(function(event) {
// 	var target = event.target;
// 	console.log(target) 
// 	if (target.hasAttribute('name')) {
//         $(target).parent(".a").attr("class",""+myClass[3]+"")
//         for(var i=0;i<3;i--){
//         $(".a").eq(i).attr("class",""+myClass[i]+"")
//         }		
// });



// $(".fa-angle-up").click(function() {
// 	if (a<10) {
//   		for(var i=0;i<10;i++){
//   			$(".a").eq(i).removeClass('news'+(i+a)+'')
//   			$(".a").eq(i).addClass('news'+(i+a+1)+'')
//   	}
//   	return a+=1;
//   }

// });
