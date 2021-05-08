let sliderWrap1 = document.querySelector('.slider-wrap1');
let slider1 = document.querySelector('.slider1');
let clonesWidth1;
let sliderWidth1;
let clones1 = [];
let scrollPos1 =1
let sliderHover1 = false;
let req1; // request animation frame reference
let items1 = [...document.querySelectorAll('.slider-item1')];
let images1 = [...document.querySelectorAll('.img-div1')];


let imgLinks1 = [
    'New_products/np1.jpg',
    'New_products/np2.jpg',
    'New_products/np3.jpg',
    'New_products/np4.jpg',
    'New_products/book.jpg',
    'New_products/book1.jpg',

]

// apply above images as a background to the image items
images1.forEach((image, idx) => {
    image.style.backgroundImage = `url(${imgLinks1[idx]})`
})

items1.forEach(item => {
    let clone = item.cloneNode(true);
    clone.classList.add('clone');
    slider1.appendChild(clone);
    clones1.push(clone);
})
if(imgLinks1.length<5){
    sliderHover1 = true;
}
sliderWrap1.addEventListener('mouseover', () =>{
    sliderHover1 = true;
})
if(imgLinks1.length>4){
    sliderWrap1.addEventListener('mouseleave', () =>{
        sliderHover1 = false;
    })
}
if(imgLinks1.length<=4){
    sliderWrap1.addEventListener('mouseleave', () =>{
        sliderHover1 = true;
    })
}



function getClonesWidth1(){
    let width = 0;
    clones1.forEach(clone => {
        width += clone.offsetWidth;
    })
    return width;
}


function scrollUpdate1(){
    if(window.innerWidth > 760){
        sliderWrap1.style.overflow = 'hidden';
        if(!sliderHover1){
            scrollPos1 -= 2
        }
        
        if(clonesWidth1 + scrollPos1 >= sliderWidth1){
            window.scrollTo({top: 1});
            scrollPos1 = 1;
        }else if(scrollPos1 <= 0){
            scrollPos1 = sliderWidth1 - clonesWidth1 - 1
        }
        slider1.style.transform = `translateX(${-scrollPos1}px)`
    
        req1 = requestAnimationFrame(scrollUpdate1)
    }else{
        sliderWrap1.style.overflow = 'scroll';
    }
    
}

window.addEventListener('resize', onLoad1)

function onLoad1(){
    cancelAnimationFrame(req1);
    calaculateDimensions1()
    document.body.style.height = `${sliderWidth1}px`
    scrollPos1 = 1;
    scrollUpdate1();
}

function calaculateDimensions1(){

    sliderWidth1 = slider1.getBoundingClientRect().width;
    clonesWidth1 = getClonesWidth1();
}

onLoad1()