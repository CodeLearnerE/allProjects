var a= 0;

$(document).ready(function() {
  // $("a").click(function() {
  //   console.log($(this).eq(0).attr("href"))
  // });
  // $("li").click(function() {
  // var a= $(this).text();

  // $(".outputText").val(a+" "+" -e kilklediniz")
// });

$(window).scroll(function(event) {
  a++;
  console.log(a)
  if($(this).scrollTop() > 10){
    $("ul").css({"position":"fixed","background":"gray"});
  }
  else {
    $("ul").css({"position":"relative","background":"none"});
  }
});

});



