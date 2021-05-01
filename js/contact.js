'use strict';
function contactValidation (event){
    //event.preventDefault();
    let email=document.getElementById("txtEmail");
    let name=document.getElementById("txtUserName");
    let phone=document.getElementById("txtPhone");
    let errMsg = {
        ulEmail: [],
        ulName: [],
        ulPhone: []
    }
    let resultEmail = validateEmail(email);
    let resultName = validateName(name);
    let resultPhone = validatePhoneNumber(phone);

    if (resultEmail.length > 0) {
        errMsg.ulEmail.push(resultEmail[0]);
    }

    if (resultName.length > 0) {
        errMsg.ulName.push(resultName[0]);
    }

    if (resultPhone.length > 0) {
        errMsg.ulPhone.push(resultPhone[0]);
    }

    displayValidation(errMsg);

    if (checkAllValidation(errMsg)) {
        return true;
    }
    return false;
    
}







