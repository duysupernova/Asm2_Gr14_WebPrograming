'use strict';

// function
function loginValidation() {
    let errMsg = {
        olEmail: [],
        olPw: []
    }
    let userID = document.querySelector('#uId').value;
    let userPW = document.querySelector('#uPsw').value;
    let resultEmail = validateEmail(userID);
    let resultPw = validatePassword(userPW);

    if (resultEmail.length > 0) {
        errMsg.olEmail.push(resultEmail[0]);
    }

    if (resultPw.length > 0) {
        errMsg.olPw.push(resultPw[0]);
    }

    displayValidation(errMsg);
    if (checkAllValidation(errMsg)){
        localStorage.userCurrentId = userID;
        return true;
    }
    return false;
}
