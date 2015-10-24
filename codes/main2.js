$(document).ready(function(){

	$("body").css("background","url('bg.jpg')");

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