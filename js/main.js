document.getElementById("cat").addEventListener("mouseover", function(){
    document.getElementById("henspeech").innerHTML = "Purrrr";
});
//listens for mouseover on cat and inserts text upon mouseover

document.getElementById("cat").addEventListener("mouseout", function(){
		document.getElementById("henspeech").innerHTML = "Meow";
});
//listens for mouseout on cat and inserts text upon mouseout

document.addEventListener("keydown", function() {
	document.getElementById("henspeech").innerHTML = "Yum!";
});
//listens for keydown on page and inserts text upon keydown
