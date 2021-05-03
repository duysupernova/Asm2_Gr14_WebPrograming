'use strict'

window.addEventListener('load', changeMyPagePath);

function changeMyPagePath(){
    const myPagePath = document.getElementById("account");
    const newPath = "mypage.html"
    if(localStorage.getItem("userCurrentId") !== null){
        myPagePath.setAttribute("href",newPath);
    }
}
