$("button").on("click",function(){
		$.getJSON("https://jsonplaceholder.typicode.com/todos",function(data){
			$.each(data, function(key, value){

				$("ul").append("<li>"+value.UserID+"</li>");
				$("ul").append("<li>"+value.id+"</li>");
				$("ul").append("<li>"+value.title+"</li>");
				$("ul").append("<li>"+value.completed+"</li>");
			});

	});
});

	


