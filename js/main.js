document.getElementById("cat").addEventListener("mouseover", function(){
    document.getElementById("henspeech").innerHTML = "Purrrr";
});

document.getElementById("cat").addEventListener("mouseout", function(){
		document.getElementById("henspeech").innerHTML = "Meow";
});

document.addEventListener("keydown", function() {
	document.getElementById("henspeech").innerHTML = "Yum!";
});
