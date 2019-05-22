// Check off specific toDos by clicking

$("ul").on("click", "li", function(){

	$(this).toggleClass("completed");
});

// the above line of cod eis similar to the function below

// 	// if li is gray
// 	if($(this).css("color") === "gray"){
// 	// turn it black
// 	$(this).css({
// 		color: "black",
// 	    textDecoration: "none";
// 	});
// 	}
// // else
// else{
// 	// turn it gray
// 	$(this).css({
// 	 color: "gray";
// 	 // use camelcase as hifen is not recognized
// 	 textDecoration: "line-through";
// 	});
// }
	
// });


// CLick on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// add listener to input
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});




















