document.getElementById("cat").addEventListener("mouseover", function(){
    document.getElementById("henspeech").innerHTML = "Meow";
});

document.getElementById("cat").addEventListener("mouseout", function(){
		document.getElementById("henspeech").innerHTML = "Come back";
});

document.addEventListener("keydown", function() {
	document.getElementById("henspeech").innerHTML = "Yum!";
});
