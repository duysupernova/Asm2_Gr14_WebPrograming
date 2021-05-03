'use strict'

// Add eventlistener
window.addEventListener('load', changeUserEmail);

// Function 
function changeUserEmail(){
    var userEmail = document.querySelector("#mypageEmail");
    if(localStorage.getItem("userCurrentId").length > 0 ){
        userEmail.innerHTML = localStorage.getItem("userCurrentId");
    }
}

