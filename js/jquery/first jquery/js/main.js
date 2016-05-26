$(document).ready(function(){    
       setInterval(click1,2000); 


$(".main")
	.css({

	"width":"400px",
	"height":"200px",
	"background":"red"
	})
	.click(function() {
		$(this)
			.animate({
				"width":"600px",
				"height":"400px",
				"background":"black",
				"margin-left":"600px",
				"margin-top":"300px",
				"margin-left":"300px"
			},function() {
				$(this)
					.animate({
					"width":"400px",
					"height":"200px",
					"background":"red",
					"margin-top":"400px",
					"margin-left":"400px"
				})
					.animate({
					"width":"400px",
					"height":"200px",
					"background":"red",
					"margin-top":"0px",
					"margin-left":"0px"
					});
			});
	});
});

function click1 () {
	$(".main")
			.animate({
				"width":"600px",
				"height":"400px",
				"background":"black",
				"margin-left":"600px",
				"margin-top":"300px",
				"margin-left":"300px"
			},function() {
				$(this)
					.animate({
					"width":"400px",
					"height":"200px",
					"background":"red",
					"margin-top":"400px",
					"margin-left":"400px"
				})
					.animate({
					"width":"400px",
					"height":"200px",
					"background":"red",
					"margin-top":"0px",
					"margin-left":"0px"
					});
			});
	}
