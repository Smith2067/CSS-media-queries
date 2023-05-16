var x = document.getElementById("navButtonContainer");
var y = document.getElementById("hamburgerMenu");

function displayNavButtons(){
    if(x.style.display == "none"){
        x.style.display = "flex";
    }
    else{
        x.style.display = "none";
    }
}

y.addEventListener("click", displayNavButtons)

x.style.flexDirection