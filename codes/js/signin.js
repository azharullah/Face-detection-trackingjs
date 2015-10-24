$(document).ready(function(){

	$("#signin_body").css("display","inline");

	$("#wrong_pass").click(function(){

		$("#wrong_pass").remove();
		$('#content').load('index.php #signin_body')
	
	})

	$("#not_registered").click(function(){

		$("#not_registered").remove();
		$('#content').load('index.php #signup_body')
	
	})

	$("#signin_ini, #signup_ini, input, button").hover(
		function(){
			$(this).css("opacity","1");
		},
		function(){
			$(this).css("opacity","0.5");
		});



})