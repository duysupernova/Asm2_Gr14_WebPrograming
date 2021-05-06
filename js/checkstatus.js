'use strict'

window.addEventListener('load', changeMyPagePath);

function changeMyPagePath(){
    const myPagePath = document.getElementById("account");
    const newPath = "//duysupernova.github.io/Asm2_Gr14_WebPrograming/mypage.html"
    if(localStorage.getItem("userCurrentId") !== null){
        myPagePath.setAttribute("href",newPath);
    }
}
