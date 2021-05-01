'use strict';

// Get elements.
// document.querySelectorAll
const modalCont = document.querySelector('.modalCont');
const modalContent = document.querySelector('.modalContent');
const openBtn = document.querySelectorAll('.modalOpenBtn');
const closeBtn = document.querySelector('.modalCloseBtn');

const moreInfoData = {
    daniel: {
        motto: "Fast enough loneliness can’t catch me up.",
        roleModel:"Tony Stark",
        mbti:"INTJ"
    },
    liz: {
        motto: "No pain, no gain.",
        roleModel:"Mary Kom",
        mbti:"ENFP"
    },
    Khang: {
        motto: "If at first you don't succeed, try, try again.",
        roleModel:"Stephen Hawking",
        mbti:"INFJ"
    },
    suk: {
        motto: "Nothing ventured, nothing gained.",
        roleModel:"APJ Abdul Kalam",
        mbti:"INFP"
    }
}

// Add event.

// openBtn
for (let a = 0; a < openBtn.length; a++){
    openBtn[a].addEventListener('click', openModal);
}

//closeBtn
closeBtn.addEventListener('click', closeModal);
modalContent.addEventListener('click', closeModal);

// Function 
function openModal(e) {
    var memberName = e.target.classList.item(1);
    modalCont.classList.add('setCont');
    modalCont.classList.add('blur');
    modalContent.classList.add('show');
    fillModal(memberName);
}

function closeModal() {
    modalCont.classList.remove('setCont');
    modalCont.classList.remove('blur');
    modalContent.classList.remove('show');
}

function fillModal (memName) {
    let mottoDes = document.querySelector("#motto");
    let roleModelDes = document.querySelector("#roleModel");
    let mbtiDes = document.querySelector("#mbti");
    mottoDes.innerHTML = moreInfoData[memName]["motto"];
    roleModelDes.innerHTML = moreInfoData[memName]["roleModel"];
    mbtiDes.innerHTML = moreInfoData[memName]["mbti"];
}








