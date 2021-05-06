'use strict'

window.addEventListener('load', changeMyPagePath);

function changeMyPagePath(){
    const myPagePath = document.getElementById("account");
<<<<<<< Updated upstream
    const newPath = "//duysupernova.github.io/Asm2_Gr14_WebPrograming/mypage.html"
=======
    const newPath = "//duysupernova.github.io/Asm2_Gr14_WebPrograming/mypage.html";
>>>>>>> Stashed changes
    if(localStorage.getItem("userCurrentId") !== null){
        myPagePath.setAttribute("href",newPath);
    }
}
