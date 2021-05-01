'use strict';


// Get Element.

const body = document.querySelector('body');
const myPagePath = "mypage.html";
var accountLink = document.querySelector('#account').href;

//  //Window.location.assign("//127.0.0.1:5500/accountContents/mypage.html");


// function
// Login function
function loginValidation() {
    let errMsg = {
        olEmail: [],
        olPw: []
    }
    const userID = document.querySelector('#uId').value;
    const userPW = document.querySelector('#uPsw').value;
    let resultEmail = validateEmail(userID);
    let resultPw = validatePassword(userPW);

    if (resultEmail.length > 0) {
        errMsg.olEmail.push(resultEmail[0]);
    }

    if (resultPw.length > 0) {
        errMsg.olPw.push(resultPw[0]);
    }

    displayValidation(errMsg)

    if (checkAllValidation(errMsg)) {
        localStorage.userCurrentId = userID;
        return true;
    }
    return false;
}



// Load my page function