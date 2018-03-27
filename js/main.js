document.getElementById("clickMe").addEventListener("click", function(){
    document.getElementById("paragraph").innerHTML = "This is click number: " + event.detail;
});
