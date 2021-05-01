'use strict';
// Form Validation

// Function
function register() {
    let errMsg = {
        emailList:[],
        phoneNvmList:[],
        pwList:[],
        repwList:[],
        fNameList:[],
        lNameList:[],
        addressList:[],
        cityList:[],
        zCodeList:[]
    };
    // HTML element
    const email = document.querySelector('#registerForm #rEmail').value;
    const phoneNvm = document.querySelector('#registerForm #rPhoneNvm').value;
    const psw = document.querySelector('#registerForm #psw').value;
    const pswRe = document.querySelector('#registerForm #pswCheck').value;
    const fName = document.querySelector('#registerForm #fName').value;
    const lName = document.querySelector('#registerForm #lName').value;
    const address = document.querySelector('#registerForm #address').value;
    const city = document.querySelector('#registerForm #city').value;
    const zCode = document.querySelector('#registerForm #zCode').value;
    
    let emailResult = validateEmail(email);
    let phoneNvmResult = validatePhoneNumber(phoneNvm);
    let pwResult = validateRegisterPassword(psw);

    if(emailResult.length > 0){
        errMsg.emailList.push(emailResult[0]);
    }
    
    if(phoneNvmResult.length > 0){
        errMsg.phoneNvmList.push(phoneNvmResult[0]);
    }

    if(pwResult.length > 0){
        errMsg.pwList.push(pwResult[0]);
    }
    
    if (!validateRetypePassword(psw, pswRe)){
        errMsg.repwList.push("The password is different above.");
    }
    
    if (!(validateAtLeastThreeChr(fName))){
        errMsg.fNameList.push("The first name form needs at least three characters");
    }
    
    if (!(validateAtLeastThreeChr(lName))){
        errMsg.lNameList.push("The last name form needs at least three characters");
    }
    
    if (!(validateAtLeastThreeChr(address))){
        errMsg.addressList.push("The address name form needs at least three characters");
    }
    
    if (!(validateAtLeastThreeChr(city))){
        errMsg.cityList.push("The city name form needs at least three characters");
    }
    
    if (!(validateZipCode(zCode))){
        errMsg.zCodeList.push("The range of zip code characters is 4 to 6.");
    }
    displayValidation(errMsg);

    if (checkAllValidation(errMsg)) {
        return true;
    }
    return false;
}

// visible form box for shop owner function

// Get element
const ownerBtn = document.querySelector('#typeCont #owner');
const shopperBtn = document.querySelector('#typeCont #shopper');
const ownerInfo = document.querySelector('.ownerInfo');

// Add event 
ownerBtn.addEventListener('click',showBox);
shopperBtn.addEventListener('click',hideBox);
// Function
function showBox(){
    ownerInfo.classList.add('visible');
    ownerInfo.classList.remove('invisible');
}

function hideBox(){
    ownerInfo.classList.add('invisible');
    ownerInfo.classList.remove('visible');
}