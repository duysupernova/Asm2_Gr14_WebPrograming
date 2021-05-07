var button = document.getElementById("add-button")
var buyButton = document.getElementById("buy-button")
var products = ["The Speed", "The Strong"]

cartNumber()
if(button){
	button.addEventListener('click',() => {    
    cartUpdate()
    popUp()
});}

if(buyButton){
	buyButton.addEventListener('click',() => {    
    cartUpdate()
});
}

function cartNumber(){
	var num = 0
	for (var i in localStorage) {
        if (localStorage.getItem(i) != null && products.includes(i)){
			string = localStorage.getItem(i)
            num += parseInt(string.split(",")[1])
		}
	}
	console.log(document.getElementsByClassName('cart-number')[0].innerText)
	document.getElementsByClassName('cart-number')[0].innerHTML = `${num}<img src = "img/cart.png" class = "cart-icon">`
	var icon = document.getElementsByClassName("cart-icon")[0]
	if(num < 10){
		icon.style.right = "29px";
	}
	if(num >= 10) {
		icon.style.right = "35px";
	}

	
}
function cartUpdate() {
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
	cartNumber()

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
  