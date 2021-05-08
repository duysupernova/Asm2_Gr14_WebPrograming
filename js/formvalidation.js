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

function validateContactDay(boxes){
    let dayErrList = [];
    for(let a = 0; a < boxes.length; a++){
        let box = boxes[a];
        if (box.checked === true){
			return dayErrList;
		}
	}
    dayErrList.push("Please check at least one day.");
    return dayErrList;
}

function validateContactMethod(methods){
    let methodErrList = [];
    for(let b = 0; b < methods.length; b++){
        let method = methods[b];
        if (method.checked === true){
			return methodErrList;
		}
	}
    methodErrList.push("Please check at least one method.");
    return methodErrList;
}

function validateTextarea(txt){
    let textErrList = [];
    let txtLength = txt.value.length;
    if ( 50 <= txtLength &&
        txtLength <= 500){
            return textErrList;
    }
    textErrList.push("The message box must contain only 50 to 500 letters.");
    return textErrList;
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
    if ((isValidPhoneNumber(phoneNvm))){
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
	var reg = /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/;
	var lastReg =  /^([A-Za-z]{2,5})$/
	
    if (reg.test(uemail) == false) 
        {
            return false;
        }

	var domain = uemail.split("@")[1]
	var name = uemail.split("@")[0]
	if (!domain.includes(".")){
		return false
	}
	if(name.length < 3){
	    return false;
	}
	if ( name[name.length -1] == "."){
		return false;
	}
	var domainSplit = domain.split(".")
	var lastDomain = domain.split(".")[domainSplit.length-1]
	if(uemail[(uemail.length-1)] == "."){
			return false;
		}
	if(uemail[0] == "."){
			return false;

		}
	for (var i = 0; i < uemail.length ; i++){
			if( i >0 ){
				if(uemail[i] == "." && uemail[i-1] == "."){
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

function isValidPhoneNumber(phoneNvm){
    const specialChrs = [' ', '.', '-'];
    let copyphoneNvm = "";
    let spcIdx = [];
    
    const validLetter = /^[0-9\.\-\s]+$/;
    if(!(validLetter.test(phoneNvm))){
        return false;
    }

    for (let spcChr of specialChrs){
        if(phoneNvm.startsWith(spcChr)){
            return false;
        } else if (phoneNvm.endsWith(spcChr)){
            return false;
        }
    }

    for (let e = 0; e < phoneNvm.length; e++){
        if (specialChrs.includes(phoneNvm[e])){
            spcIdx.push(e);
            copyphoneNvm += '';
        }else{
            copyphoneNvm += phoneNvm[e]
        }
    }
    if(copyphoneNvm.length < 9 ||
        copyphoneNvm.length > 11 ){
        return false
    }	

    for (let a = 1; a < (spcIdx.length + 1); a++){
        let b = a - 1;
        let idxChk = spcIdx[a] - spcIdx[b];
        if(idxChk === 1){
            return false;
        }
    }
    return true;
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