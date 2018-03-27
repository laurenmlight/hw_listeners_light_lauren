document.getElementById("form").addEventListener("submit", function(){
		event.preventDefault();
		console.log(firstname.value);
		console.log(lastname.value);
		console.log(email.value);
		console.log(message.value);
});








/*
var heading = document.getElementById( 'clickMe' );

heading.addEventListener( "click", function() {
    var myElement = document.createElement( 'paragraph' );
		myElement.innerHTML = '<p>this is the paragraph</p>';
		document.getElementsbyClassName( 'container' ).appendChild( myElement );
});

/*

function modifyHTML() {
	var heading = document.getElementsByTagName( 'h1' );
	heading.innerHTML = 'You interactived with an evet!';
}

search.addEventListener( "click", modifyHTML);




var pageheading = document.getElementsByTagName( 'h1' );

pageheading.addEventListener('click', function () {
	console.log('we are listening to events!');
});



document.getElementById("click").addEventListener("click", function(){
    document.getElementById("p").innerHTML = "Hello World";
});

*/
