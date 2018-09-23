// Cross off specific Todos by clicking
$("ul").on("click", "li", function(event) {
	$(this).toggleClass("completed");
});

// click on X to remove todo
$("ul").on( "click", "span",function(event) {
	$(this).parent().fadeOut(1000, function() {
		$(this).remove();
	});
	event.stopPropagation(); // stops event bubbling
});

$("input[type = 'text']").keypress(function(event) {
	if(event.which === 13) {
		// stores new todo in variable
		let todoText = $(this).val();
		// clears the text input after hitting enter
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

// edit function
$(".fa-edit").click(function() {
	$("input[type = 'text']").fadeToggle(800);
})