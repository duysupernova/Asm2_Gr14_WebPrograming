let sliderWrap3rd = document.querySelector('.slider-wrap3rd');
let slider3rd = document.querySelector('.slider3rd');
let clonesWidth3rd;
let sliderwidth3rd;
let clones3rd = [];
let scrollPos3rd =1
let sliderHover3rd = false;
let req3rd; // request animation frame reference
let items3rd = [...document.querySelectorAll('.slider-item3rd')];
let images3rd = [...document.querySelectorAll('.img-div3rd')];


let imgLinks3rd = [
    'New_products/beauty.jpg',
    'New_products/beauty1.jpg',
    'New_products/bts.jpg',
    'New_products/kitchen.jpg',
]

// apply above images as a background to the image items
images3rd.forEach((image, idx) => {
    image.style.backgroundImage = `url(${imgLinks3rd[idx]})`
})

items3rd.forEach(item => {
    let clone = item.cloneNode(true);
    clone.classList.add('clone');
    slider3rd.appendChild(clone);
    clones3rd.push(clone);
})
if(imgLinks3rd.length<5){
    sliderHover3rd = true;
}
sliderWrap3rd.addEventListener('mouseover', () =>{
    sliderHover3rd = true;
})
if(imgLinks3rd.length>4){
    sliderWrap3rd.addEventListener('mouseleave', () =>{
        sliderHover3rd = false;
    })
}
if(imgLinks3rd.length<=4){
    sliderWrap3rd.addEventListener('mouseleave', () =>{
        sliderHover3rd = true;
    })
}


function getclonesWidth3rd(){
    let width = 0;
    clones3rd.forEach(clone => {
        width += clone.offsetWidth;
    })
    return width;
}


function scrollUpdate3rd(){
    if(window.innerWidth > 760){
        sliderWrap3rd.style.overflow = 'hidden';
        if(!sliderHover3rd){
            scrollPos3rd -= 2
        }
        
        if(clonesWidth3rd + scrollPos3rd >= sliderwidth3rd){
            window.scrollTo({top: 1});
            scrollPos3rd = 1;
        }else if(scrollPos3rd <= 0){
            scrollPos3rd = sliderwidth3rd - clonesWidth3rd - 1
        }
        slider3rd.style.transform = `translateX(${-scrollPos3rd}px)`
    
        req3rd = requestAnimationFrame(scrollUpdate3rd)
    }else{
        sliderWrap3rd.style.overflow = 'scroll';
    }
    
}

window.addEventListener('resize', onLoad3rd)

function onLoad3rd(){
    cancelAnimationFrame(req3rd);
    calaculateDimensions3rd()
    document.body.style.height = `${sliderwidth3rd}px`
    scrollPos3rd = 1;
    scrollUpdate3rd();
}

function calaculateDimensions3rd(){

    sliderwidth3rd = slider3rd.getBoundingClientRect().width;
    clonesWidth3rd = getclonesWidth3rd();
}

onLoad3rd()