'use strict';

// Get Element.
const body = document.querySelector('body');
const myPagePath = "mypage.html";
var accountLink = document.querySelector('#account').href;

// function
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
        console.log(checkAllValidation(errMsg));
        return true;
    }
    return false;
}
