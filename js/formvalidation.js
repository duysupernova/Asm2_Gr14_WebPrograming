'use strict';

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
    if ((isValidPhone1(phoneNvm))|
        (isValidPhone2(phoneNvm))|
        (isValidPhone3(phoneNvm))){
            return PhoneErrList;
        }
    PhoneErrList.push("Invalid phone number. Please check again.");
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
	let reg = /^([A-Za-z0-9_\-\.]{3})+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	let lastReg =  /^([A-Za-z]{2,5})/
	let domain = uemail.split("@")[1]
	let lastDomain = domain[domain.length-1]
    if (reg.test(uemail) == false) 
        {
            return false;
        }
	if(uemail[(uemail.length-1)] == "."){
			return false;
		}
	if(uemail[0] == "."){
			return false;
		}
	for (var i = 0; i < uemail.length ; i++){
			if( i >0 ){
				if(uemail[i] == "." && uemail[i] == "."){
					return false;
				}
			}
		}
	if (lastReg.test(lastDomain) == false){
		return false
	}

        return true;

}

function isValidName(name) {
    let validName = new RegExp("^[a-zA-Z]{3,}$");
    return (validName.test(name));
}


function isValidPhone1(phone){
    return (/^([0-9]{9,11})$/.test(phone));
}

function isValidPhone2(phone){
    return (/^([0-9]+\W){9}[0-9]$/.test(phone));
}

function isValidPhone3(phone){
    return (/^([0-9]+\W){2}([0-9]{4})/.test(phone));
}

function isAtLeastThreeChr(formValue) {
    let atLeastThreeRegex = new RegExp("^[a-zA-Z]{3,}$");
    return (atLeastThreeRegex.test(formValue));
}

function isValidZipcode(uZipCode) {
    let zipEx = new RegExp("^([0-9]{4,6})$");
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