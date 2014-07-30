
// window.onload = function() {
// 	alert( "welcome");
// }

$(document).ready(function() {
	alert("welcome");
});

// $(document).ready(function() {
// 	$("a").click(function(event) {
// 		alert("The link will no longer take you to jquery.com");
// 		event.preventDefault();
// 	});
// });

$("a").addClass("test");

$("a").click(function() {
	$(this).hide("slow");
});