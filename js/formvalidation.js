'use strict';

function checkAllValidation(errMsgCont) {
    for (let errContName in errMsgCont) {
        let firstChildText = document.getElementById(errContName).firstElementChild.innerHTML;
        if (firstChildText !== "Success") {
            return false;
        }
    }
    return true;
}

function validateEmail(email) {
    let EmailErrList = [];
    if (!(isValidEmail(email))) {
        EmailErrList.push("Invalid email. Please check again.");
    }
    return EmailErrList;
}

function validatePhoneNumber(phoneNvm) {
    let PhoneErrList = [];
    if (!(isValidPhone(phoneNvm))) {
        PhoneErrList.push("Invalid phone number. Please check again.");
    }
    return PhoneErrList;
}

function validatePassword(psw) {
    let pwErrList = [];
    if (psw !== "password") {
        pwErrList.push("Invalid password. Please check again.");
    }
    return pwErrList;
}

function validateRegisterPassword(upassword) {
    let errorMsg = []
    if (!(isRegisterPsw(upassword))) {
        errorMsg.push("Invalid password. Please check again.");
    }
    return errorMsg;
}

function validateRetypePassword(userPsw, userRePsw) {
    if (userPsw === userRePsw) {
        return true;
    }
    return false;
}

function validateName(userName) {
    if (isValidName(userName)) {
        return true;
    }
    return false;
}


function validateAtLeastThreeChr(testString) {
    if (isAtLeastThreeChr(testString)) {
        return true;
    }
    return false;
}

function validateZipCode(userZipCode) {
    if (isValidZipcode(userZipCode)) {
        return true;
    }
    return false;
}

// Regular expression
function isValidEmail(uemail) {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(uemail));
}

function isValidName(name) {
    return /^[a-zA-Z]+$/.test(name);
}

function isValidPhone(phone) {
    return /^([0-9].)*[0-9]$/.test(phone);
}

function isAtLeastThreeChr(formValue) {
    let atLeastThreeRegex = new RegExp("^[a-zA-Z]{3,}$");
    return (atLeastThreeRegex.test(formValue));
}

function isValidZipcode(uZipCode) {
    let zipEx = new RegExp("^([0-9]{4}|[0-9]{6})$");
    return (zipEx.test(uZipCode));
}

function isRegisterPsw(strPsw) {
    let registerPsw = new RegExp("^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20})$");
    return (registerPsw.test(strPsw));
}

// Display form status
function displayValidation(errMsgArr) {
    for (let errListName in errMsgArr) {
        if (errMsgArr[errListName].length > 0) {
            displayError(errListName, errMsgArr[errListName]);
        } else {
            formSuccess(errListName);
        }
    }
}

<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
function formSuccess(successForm) {
    // remove all append child <ol class>
    // add new child li "sucess"
    const validList = document.getElementById(successForm);
    let successMsg = document.createElement('li');
    validList.innerHTML = " ";
    successMsg.innerHTML = "Success";
    validList.appendChild(successMsg);
    validList.classList.remove("invalidForm");
    validList.classList.add("validForm");
}

function displayError(listName, errArray) {
    for (let y = 0; y < errArray.length; y++) {
        let invalidList = document.getElementById(listName);
        let li = document.createElement('li');
        console.log(invalidList);
        console.log(invalidList.classList);
        invalidList.innerHTML = " ";
        li.innerHTML = errArray[y];
        invalidList.appendChild(li);
        console.log(invalidList.classList);
        invalidList.classList.add("invalidForm");
        invalidList.classList.remove("validForm");
    }
}