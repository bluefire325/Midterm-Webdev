$.(function(){
var $french=$("#french");
	$("button").on("click",function(){
		$.ajax({
			url:"https://jsonplaceholder.typicode.com/todos",
			dataType:"Json",
			Type:"Get",
			success: function(data){
				console.log("french")
				$.each(data, function(i, data){
					$frenchtxt.append("<li>"+data.title+"</li>")
		});
	}
});

});






















})