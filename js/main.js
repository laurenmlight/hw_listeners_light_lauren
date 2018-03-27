document.getElementById("form").addEventListener("submit", function(){
		event.preventDefault();
		console.log(firstname.value);
		console.log(lastname.value);
		console.log(email.value);
		console.log(message.value);
});
