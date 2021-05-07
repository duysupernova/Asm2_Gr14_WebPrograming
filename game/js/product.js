var button = document.getElementById("add-button")
var buyButton = document.getElementById("buy-button")

button.addEventListener('click',() => {    
    cartNumber()
    popUp()
});
buyButton.addEventListener('click',() => {    
    cartNumber()
});

function cartNumber() {
    var n = false;
    if(localStorage.getItem(document.getElementById("product-name").innerText) != null){
        var string = localStorage.getItem(document.getElementById("product-name").innerText)
        n = parseInt(string.split(",")[1])
    }
    if(n){
        localStorage.setItem(document.getElementById("product-name").innerText, [parseInt(document.getElementById("product-price").innerText.replace("$","")),n+1])
    }
    else{
        localStorage.setItem(document.getElementById("product-name").innerText, [parseInt(document.getElementById("product-price").innerText.replace("$","")),1])
    }
    console.log(typeof document.getElementById("product-name").innerText)
}

function popUp() {
    var popup = document.getElementById("card");
    popup.style.visibility ="visible"
    popup.classList.add("show");
    setTimeout(function(popup){ 
        var popup = document.getElementById("card");
        popup.style.visibility ="hidden"; 
        popup.classList.remove("show");
        }, 200);


  }
  