document.getElementById("cat").addEventListener("mouseover", function(){
    document.getElementById("meow").innerHTML = "Meow";
		document.getElementById("comeBack").innerHTML = "";
});

document.getElementById("cat").addEventListener("mouseout", function(){
    document.getElementById("meow").innerHTML = "";
		document.getElementById("comeBack").innerHTML = "Come back";
});

document.getElementById("cat").addEventListener("keydown", function(){
    document.getElementById("meow").innerHTML = "";
		document.getElementById("comeBack").innerHTML = "Come back";
});
