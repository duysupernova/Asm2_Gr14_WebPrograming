'use strict';

let phone = document.getElementById("txtPhone")

function checkAllValidation(errMsgCont) {
    const successMsg = "Success";
    for (let errContName in errMsgCont) {
        let firstChildText = document.getElementById(errContName).firstElementChild.innerHTML;
        if (firstChildText !== successMsg) {
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
    console.log((isValidPhone1(phoneNvm)));
    console.log((isValidPhone2(phoneNvm)));
    console.log((isValidPhone3(phoneNvm)));
    if ((isValidPhone1(phoneNvm))|
        (isValidPhone2(phoneNvm))|
        (isValidPhone3(phoneNvm))){
            return PhoneErrList;
        }

    PhoneErrList.push("Invalid phone number. Please check again3.");
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
    let errorMsg = []
    if (!(isValidName(userName))) {
        errorMsg.push("Invalid name. Please check again.");
    }
    return errorMsg;
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
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/.test(uemail));
}

function isValidName(name) {
    let validName = new RegExp("^[a-zA-Z]{3,}$");
    return (validName.test(name));
}


function isValidPhone1(phone){
    let validphone1 = new RegExp("^([0-9]{9,11})$");
    return (validphone1.test(phone));
}

function isValidPhone2(phone){
    let validphone2 = new RegExp("^([0-9]+\W){9}[0-9]$");
    return (validphone2.test(phone));
}

function isValidPhone3(phone){
    let validphone3 = new RegExp("^([0-9]+\W){2}([0-9]{4})");
    return (validphone3.test(phone));
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

function formSuccess(successForm) {
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
        invalidList.innerHTML = " ";
        li.innerHTML = errArray[y];
        invalidList.appendChild(li);
        invalidList.classList.add("invalidForm");
        invalidList.classList.remove("validForm");
    }
}