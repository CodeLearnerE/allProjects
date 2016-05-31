$(document).ready(function() {
  $(".main").mouseover(function(){
    $("img").css({"height":"350px","width":"350px"});
    $(".word").eq(0).css({"background":"black","opacity":".5","visibility":"visible"});
}); 
  $(".main").mouseout(function(){
    $("img").css({"height":"300px","width":"300px"});
    $(".word").eq(0).css({"background":"none","opacity":"0","visibility":"hidden"});
});
});
