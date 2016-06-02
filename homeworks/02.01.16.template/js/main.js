
var a= 0;

$(document).ready(function() {
$(window).scroll(function(event) {
  a++;
  console.log(a)
  if($(this).scrollTop() > 10){
    $(".myFixedMenu").css({"background":"black","margin-top": "0px","height":"auto","padding":"15px;"});
    $(".genesis").css({"border-bottom": "none","height":"auto"});
    $(".logo img").css({"width":"80%"});
  }
  else {
    $(".myFixedMenu").css({"position":"","margin-top": "30px","background":"none","height":"100px"});
    $(".genesis").css({"border-bottom": "1px solid #b2b3b1","height":"100px"});
    $(".logo img").css({"width":"100%"});
  }
});

});

$(document).ready(function(){
		$(".opacityColor").mouseover(function(){
			$(".fa-angle-right ,.fa-angle-left").css({
			"display":"block",
		})
		.mouseout(function(){
		$(".fa-angle-right")
		.css({
			"display":"none",
		})
		})
	})})

$("#butt").hover(function(){
		$(this).css({
			"background":"black",
			"color":"white"
		})
	})
		.mouseout(function(){
		$(this)
		.css({
			"color":"",
			"background":"",
			"transition-duration":".5s"
		})
	})
			$(".kletka2 button").hover(function(){
		$(this).css({
			"background":"black",
			"color":"white"
		})
	})
		.mouseout(function(){
		$(this)
		.css({
			"color":"",
			"background":"",
			"transition-duration":".5s"
		})
	})
		$(".fa-angle-right").click(function(){
		$("#header").css({
			"background-image":"url(img/bg02.jpg)"

		})
		$(".anim").animate({
			"top":"50%"

		})

	})
		$(".fa-angle-left").click(function(){
		$("#header").css({
			"background-image":"url(img/bg01.jpg)"
		})

	})
	$(document).ready(function(){
		$(".btn button").hover(function(){
			$(this).css({
			"background":"white",
			"color":"black"
		})
		})
		.mouseout(function(){
		$(this)
		.css({
			"color":"",
			"background":"",
		})
	})
	$(".btn button").click(function(){
		$(this).css({
			"background":"white",
			"color":"black"
		})

	})
});
	$(".menu li").hover(function(){
		$(this).css("border","1px solid gray")
	})
	.mouseout(function(){
		$(this)
		.css({
			"border":"",
			"transition-duration":".5s"
		})
	})
	$(".contactUs,.contactUs i,.contactUs span").hover(function(){
			$(".contactUs").css({
			"background":"white",
			"color":"black"
		})
		})
		.mouseout(function(){
		$(".contactUs")
		.css({
			"color":"white",
			"background":"none"
		})
	});
		$(".whoWeAre button").hover(function(){
			$(this).css({
			"background":"black",
			"color":"white"
		})
		})
		.mouseout(function(){
		$(this)
		.css({
			"color":"",
			"background":"",
			"transition-duration":".5s"
		})
	})
