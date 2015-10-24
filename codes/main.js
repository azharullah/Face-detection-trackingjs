$(document).ready(function(){

	$("#inst").hide();
	$("#main").hide();

	$("#inst").slideDown(1000);

	$("#go").click(function(){

		$("#inst").slideUp(1000);
		$("h1").delay(1000).slideUp(500);
		$("#main").delay(1500).slideDown(1000);
		//$("body").css("background","black");

	})

	$("#detect").click(function(){
		$("#input").remove();
		$("#detect").remove();
		$("html, body").animate({ scrollTop: $(document).height() }, 1000);

		$("#main").append('<input type="submit" id="report" onclick="takereport()" value="Report">');
		$("#main").append('<center><input type="submit" id="another" onclick="location.href=\'http://athena.nitc.ac.in/azharullahshariff_b130727cs/faces_final/codes/file_upload.html\'" value="Use another image"></center>');
	})

	takereport = function()
	{
		alert("The problem is reported...Will try to figure it out soon");
	}
})