'use strict';
/*
// Check validation
function checkAllValidation(errMsgCont){
    for (let errContName in errMsgCont){
        let firstChildText = document.getElementById(errContName).firstElementChild.innerHTML;
        if(firstChildText !== "Success"){
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

function validatePhoneNumber(phoneNvm){
    let PhoneErrList = [];
    if (!(isValidPhone(phoneNvm))) {
        PhoneErrList.push("Invalid email. Please check again.");
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

function validateRegisterPassword(upassword){
    let pswErrList = []
    const atLeastUpper = new RegExp("[A-Z]+");
    const atLeastLower = new RegExp("[a-z]+");
    const atLeastDigit = new RegExp("[0-9]+");
    const atLeastSpecial = new RegExp("[\!\@\#\$\%\^\&\*]+");
    const pwEx = new RegExp("^[^\s]{8,20}$");

    if(!(pwEx.test(upassword))){
        pswErrList.push("The password form cannot begin with white space and the range of the form is 8 to 20 characters.");
    }
    if(!(atLeastUpper.test(upassword))){
        pswErrList.push("The password form requires at least one upper case letter.");
    }
    if(!(atLeastLower.test(upassword))){
        pswErrList.push("The password form requires at least one lower case letter.");
    }
    if(!(atLeastDigit.test(upassword))){
        pswErrList.push("The password form requires at least one digit.");
    }
    if(!(atLeastSpecial.test(upassword))){
        pswErrList.push("The password form requires at least one special character. (ex)!@#$%^&* ");
    }
    return pswErrList;
}

function validateRetypePassword(userPsw, userRePsw){
    if(userPsw === userRePsw){
        return true;
    }
    return false;
}

function validateAtLeastThreeChr(testString){
    if (isAtLeastThreeChr(testString)) {
        return true;
    }
    return false;
}

function validateZipCode(userZipCode){
    if (isValidZipcode(userZipCode)) {
        return true;
    }
    return false;
}

// Regular expression

function isValidEmail(uemail){
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(uemail));
}

function isValidName(name){
    return /^[a-zA-Z]+$/.test(name);
}

function isValidPhone(phone){
    return /^([0-9].)*[0-9]$/.test(phone);
}

function isAtLeastThreeChr(formValue){
    let atLeastThreeRegex = new RegExp("^[a-zA-Z]{3,}$");
    return (atLeastThreeRegex.test(formValue));
}

function isValidZipcode(uZipCode){
    let zipEx = new RegExp("^\d{4,6}$");
    return (zipEx.test(uZipCode));
}

// Display form status
function displayValidation(errMsgArr){
    for (let errListName in errMsgArr){
        if (errMsgArr[errListName].length > 0){
            displayError(errListName, errMsgArr[errListName]);
        } else {
            formSuccess(errListName);
        }
    }
}

function formSuccess(successForm){
    // remove all append child <ol class>
    // add new child li "sucess"
    const validList = document.getElementById(successForm);
    let successMsg = document.createElement('li');
    validList.innerHTML = " ";
    successMsg.innerHTML = "Success";
    validList.appendChild(successMsg);
    validList.classList.remove = "invalidForm";
    validList.classList.add = "validForm";
}

function displayError(listName, errArray){
    // listname = ol id 
    // errArray should be list
    // append list to ol
    for (let y = 0; y < errArray.length; y++){
        let invalidList = document.getElementById(listName);
        let li = document.createElement('li');
        invalidList.innerHTML = " ";
        li.innerHTML = errArray[y];
        invalidList.appendChild(li);
        invalidList.classList.add = "invalidForm";
        invalidList.classList.remove = "validForm";
    }
}
*/
function checkAllValidation(errMsgCont){
    for (let errContName in errMsgCont){
        let firstChildText = document.getElementById(errContName).firstElementChild.innerHTML;
        if(firstChildText !== "Success"){
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

function validatePhoneNumber(phoneNvm){
    let PhoneErrList = [];
    if (!(isValidPhone(phoneNvm))) {
        PhoneErrList.push("Invalid email. Please check again.");
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
function validateRegisterPassword(upassword){
    let errorMsg = []
    const atLeastUpper = new RegExp("[A-Z]+");
    const atLeastLower = new RegExp("[a-z]+");
    const atLeastDigit = new RegExp("[0-9]+");
    const atLeastSpecial = new RegExp("[\!\@\#\$\%\^\&\*]+");
    const pwEx = new RegExp("^[^\s]{8,20}$");

    if(!(pwEx.test(upassword))){
        errorMsg.push("The password form cannot begin with white space and the range of the form is 8 to 20 characters.");
    }
    if(!(atLeastUpper.test(upassword))){
        errorMsg.push("The password form requires at least one upper case letter.");
    }
    if(!(atLeastLower.test(upassword))){
        errorMsg.push("The password form requires at least one lower case letter.");
    }
    if(!(atLeastDigit.test(upassword))){
        errorMsg.push("The password form requires at least one digit.");
    }
    if(!(atLeastSpecial.test(upassword))){
        errorMsg.push("The password form requires at least one special character. (ex)!@#$%^&* ");
    }
    return errorMsg;
}

function validateRetypePassword(userPsw, userRePsw){
    if(userPsw === userRePsw){
        return true;
    }
    return false;
}

function validateName(userName){
    if (isValidName(userName)) {
        return true;
    }
    return false;
}


function validateAtLeastThreeChr(testString){
    if (isAtLeastThreeChr(testString)) {
        return true;
    }
    return false;
}

function validateZipCode(userZipCode){
    if (isValidZipcode(userZipCode)) {
        return true;
    }
    return false;
}

// Regular expression
function isValidEmail(uemail){
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(uemail));
}

function isValidName(name){
    return /^[a-zA-Z]+$/.test(name);
}

function isValidPhone(phone){
    return /^([0-9].)*[0-9]$/.test(phone);
}

function isAtLeastThreeChr(formValue){
    let atLeastThreeRegex = new RegExp("^[a-zA-Z]{3,}$");
    return (atLeastThreeRegex.test(formValue));
}

function isValidZipcode(uZipCode){
    let zipEx = new RegExp("^\d{4,6}$");
    return (zipEx.test(uZipCode));
}

// Display form status
function displayValidation(errMsgArr){
    for (let errListName in errMsgArr){
        if (errMsgArr[errListName].length > 0){
            displayError(errListName, errMsgArr[errListName]);
        } else {
            formSuccess(errListName);
        }
    }
}

function formSuccess(successForm){
    // remove all append child <ol class>
    // add new child li "sucess"
    const validList = document.getElementById(successForm);
    let successMsg = document.createElement('li');
    validList.innerHTML = " ";
    successMsg.innerHTML = "Success";
    validList.appendChild(successMsg);
    validList.classList.remove = "invalidForm";
    validList.classList.add = "validForm";
}

function displayError(listName, errArray){
    // listname = ol id 
    // errArray should be list
    // append list to ol
    for (let y = 0; y < errArray.length; y++){
        let invalidList = document.getElementById(listName);
        let li = document.createElement('li');
        invalidList.innerHTML = " ";
        li.innerHTML = errArray[y];
        invalidList.appendChild(li);
        invalidList.classList.add = "invalidForm";
        invalidList.classList.remove = "validForm";
    }
}