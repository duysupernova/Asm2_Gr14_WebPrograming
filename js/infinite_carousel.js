let sliderWrap = document.querySelector('.slider-wrap');
let slider = document.querySelector('.slider');
let clonesWidth;
let sliderWidth;
let clones = [];
let scrollPos =1
let sliderHover = false;
let req; // request animation frame reference
let items = [...document.querySelectorAll('.slider-item')];
let images = [...document.querySelectorAll('.img-div')];


let imgLinks = [
    'New_products/mall1.jpg',
    'New_products/mall2.jpg',
    'New_products/mall3.jpg',
    'New_products/mall4.jpg',
    'New_products/mall5.jpg',
]

// apply above images as a background to the image items
images.forEach((image, idx) => {
    image.style.backgroundImage = `url(${imgLinks[idx]})`
})

items.forEach(item => {
    let clone = item.cloneNode(true);
    clone.classList.add('clone');
    slider.appendChild(clone);
    clones.push(clone);
})
if(imgLinks.length<5){
    sliderHover = true;
}
sliderWrap.addEventListener('mouseover', () =>{
    sliderHover = true;
})
if(imgLinks.length>4){
    sliderWrap.addEventListener('mouseleave', () =>{
        sliderHover = false;
    })
}



function getClonesWidth(){
    let width = 0;
    clones.forEach(clone => {
        width += clone.offsetWidth;
    })
    return width;
}


function scrollUpdate(){
    if(window.innerWidth > 760){
        sliderWrap.style.overflow = 'hidden';
        if(!sliderHover){
            scrollPos -= 2
        }
        
        if(clonesWidth + scrollPos >= sliderWidth){
            window.scrollTo({top: 1});
            scrollPos = 1;
        }else if(scrollPos <= 0){
            scrollPos = sliderWidth - clonesWidth - 1
        }
        slider.style.transform = `translateX(${-scrollPos}px)`
    
        req = requestAnimationFrame(scrollUpdate)
    }else{
        sliderWrap.style.overflow = 'scroll';
    }
    
}

window.addEventListener('resize', onLoad)

function onLoad(){
    cancelAnimationFrame(req);
    calaculateDimensions()
    document.body.style.height = `${sliderWidth}px`
    scrollPos = 1;
    scrollUpdate();
}

function calaculateDimensions(){

    sliderWidth = slider.getBoundingClientRect().width;
    clonesWidth = getClonesWidth();
}

onLoad()