let sliderWrap2nd = document.querySelector('.slider-wrap2nd');
let slider2nd = document.querySelector('.slider2nd');
let clonesWidth2nd;
let sliderwidth2nd;
let clones2nd = [];
let scrollPos2nd =1
let sliderHover2nd = false;
let req2nd; // request animation frame reference
let items2nd = [...document.querySelectorAll('.slider-item2nd')];
let images2nd = [...document.querySelectorAll('.img-div2nd')];


let imgLinks2nd = [
    'New_products/mall1.jpg',
    'New_products/mall3.jpg',
    'New_products/mall5.jpg',
    'New_products/mall2.jpg',
]

// apply above images as a background to the image items
images2nd.forEach((image, idx) => {
    image.style.backgroundImage = `url(${imgLinks2nd[idx]})`
})

items2nd.forEach(item => {
    let clone = item.cloneNode(true);
    clone.classList.add('clone');
    slider2nd.appendChild(clone);
    clones2nd.push(clone);
})
if(imgLinks2nd.length<5){
    sliderHover2nd = true;
}
sliderWrap2nd.addEventListener('mouseover', () =>{
    sliderHover2nd = true;
})
if(imgLinks2nd.length>4){
    sliderWrap2nd.addEventListener('mouseleave', () =>{
        sliderHover2nd = false;
    })
}
if(imgLinks2nd.length<=4){
    sliderWrap2nd.addEventListener('mouseleave', () =>{
        sliderHover2nd = true;
    })
}


function getclonesWidth2nd(){
    let width = 0;
    clones2nd.forEach(clone => {
        width += clone.offsetWidth;
    })
    return width;
}


function scrollUpdate2nd(){
    if(window.innerWidth > 760){
        sliderWrap2nd.style.overflow = 'hidden';
        if(!sliderHover2nd){
            scrollPos2nd -= 2
        }
        
        if(clonesWidth2nd + scrollPos2nd >= sliderwidth2nd){
            window.scrollTo({top: 1});
            scrollPos2nd = 1;
        }else if(scrollPos2nd <= 0){
            scrollPos2nd = sliderwidth2nd - clonesWidth2nd - 1
        }
        slider2nd.style.transform = `translateX(${-scrollPos2nd}px)`
    
        req2nd = requestAnimationFrame(scrollUpdate2nd)
    }else{
        sliderWrap2nd.style.overflow = 'scroll';
    }
    
}

window.addEventListener('resize', onLoad2nd)

function onLoad2nd(){
    cancelAnimationFrame(req2nd);
    calaculateDimensions2nd()
    document.body.style.height = `${sliderwidth2nd}px`
    scrollPos2nd = 1;
    scrollUpdate2nd();
}

function calaculateDimensions2nd(){

    sliderwidth2nd = slider2nd.getBoundingClientRect().width;
    clonesWidth2nd = getclonesWidth2nd();
}

onLoad2nd()