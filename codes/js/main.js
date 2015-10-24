$(document).ready(function(){

	//$("#signin_body").css("visibility","hidden");
	//$("#signup_body").css("visibility","hidden");
	
	$("#signin_ini, #signup_ini, input").hover(
		function(){
			$(this).css("opacity","1");
		},
		function(){
			$(this).css("opacity","0.5");
		});

	$("#signin_ini").click(function(){
		
		//$("h1").delay(1000).css("font-size","20px");
		//$("#signin_ini").delay(1000).animate({top:'+=130px'}, 2000);
		$("#signin_ini").delay(500).slideUp("slow");
		$("#signup_ini").delay(500).slideUp("slow");
		$("p").delay(1000).slideUp(700);
		$("h1").delay(1500).animate({marginTop:'-=6%'}, 700);
		$("h1").css("margin-bottom","2%");

		$("#signin_body").delay(2000).show(0);

	})

	$("#signup_ini").click(function(){
		
		//$("h1").delay(1000).css("font-size","20px");
		//$("#signin_ini").delay(1000).animate({top:'+=130px'}, 2000);
		$("#signin_ini").delay(500).slideUp("slow");
		$("#signup_ini").delay(500).slideUp("slow");
		$("p").delay(1000).slideUp(700);
		$("h1").delay(1500).animate({marginTop:'-=6%'}, 700);
		$("h1").css("margin-bottom","2%");

		$("#signup_body").delay(2000).show(0);

	});

})