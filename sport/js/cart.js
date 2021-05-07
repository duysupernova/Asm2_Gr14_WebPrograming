var quantityInputs = document.getElementsByClassName('quantity')
var productInfo = document.getElementsByClassName('product-info')
var order = document.getElementsByClassName('order')[0]
var coupon = document.getElementsByClassName('coupon')[0]
var products = ["The Speed", "The Strong"]

updateCart()
updateTotal()
emtpyCart()
for (var i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener('change', quantityUpdate)
    
}
order.addEventListener('click',clearCart)
coupon.addEventListener('change',updateTotal)


function couponCheck(){
	if (coupon.value  == "COSC2430-HD"){
		coupon.style.backgroundColor = "#99FFC6"
		coupon.style.borderWidth = 0
		return 1
	}
	if (coupon.value  == "COSC2430-DI"){
		coupon.style.backgroundColor = "#99FFC6"
		coupon.style.borderWidth = 0
		return 2
	}
	else{
		coupon.style.backgroundColor = "white"
		coupon.style.borderWidth = "2px"
		return 0
	}
}
function clearCart(){
	for (var i in localStorage)
		if (localStorage.getItem(i) != null && products.includes(i)){
			localStorage.removeItem(i)
		}
}
function emtpyCart(){
	var empty = true;
    var cart = document.querySelector(".cart")
	for (var i in localStorage)
		if (localStorage.getItem(i) != null && products.includes(i)){
			empty = false;
		}
    if(empty){
        cart.innerHTML += `<tr class="product-info">
    <td>
        <h1>
        EMPTY  
        </h1>
    </td>
    <td>
    <h1>
        EMPTY
        </h1>
    </td>
    <td>
    <h1>
        EMPTY
    </h1>
    </td>
    </tr>`
    }
    
}
function updateCart() {
    var cart = document.querySelector(".cart")
    for (var i in localStorage) {
        if (localStorage.getItem(i) != null && products.includes(i)) {
            string = localStorage.getItem(i)
            price = string.split(",")[0]
            quan = string.split(",")[1]
            img = i.toLowerCase().replace(" ","")
            cart.innerHTML += `<tr class="product-info">
            <td>
                <div class="info">
                    <img src="img/product/${img}.png">
                    <div>
                        <h1 class = "name">
                            ${i}
                        </h1>
                        <p class = "price">
                            $${price}
                        </p>
                    </div>


                </div>
            </td>
            <td><input class = "quantity"  value = ${quan} type="number" style="
                border-radius: 10px;
                text-align: center;
                width: 30%;">
            </td>
            <td class= "indi-subtotal">$70</td>
        </tr>`
           
        }

    }

}

function quantityUpdate(event) {
    var input = event.target
    if (isNaN(input.value) || input.value < 0) {
        input.value = 1;
    }
    if (input.value == 0) {
        if (confirm("You want to remove this item?")) {
            input.value = 0
            updateTotal()
            input.parentElement.parentElement.remove()

        } else {
            input.value = 1;

        }
    }
    updateTotal()
    emtpyCart()


}

function updateTotal() {
    var name = document.getElementsByClassName("name");
    var price = document.getElementsByClassName("price");
    var quantity = document.getElementsByClassName("quantity");
    var subTotal = 0;
    for (var i = 0; i < quantity.length; i++) {
        var priceSingle = parseFloat(price[i].textContent.replace("$", ""))
        var quantitySingle = quantity[i].value
        subTotal += priceSingle * quantitySingle
        localStorage.setItem(name[i].innerText, [priceSingle, quantitySingle])
        document.getElementsByClassName('indi-subtotal')[i].textContent = '$' + priceSingle * quantitySingle
        if (quantitySingle <= 0){
            localStorage.removeItem(name[i].innerText);
        }
    }
    subTotal = Math.round(subTotal * 100) / 100
    var tax = subTotal / 10
    var delivery = 5
    if (productInfo.length == 0) {
        delivery = 0
    }
    var total = tax + delivery + subTotal
    document.getElementsByClassName('sub-total')[0].textContent = '$' + subTotal
    document.getElementsByClassName('tax')[0].textContent = '$' + tax
    document.getElementsByClassName('delivery')[0].textContent = '$' + delivery
	if(couponCheck() == 1){
		total = total-(total/20)
	}
	if(couponCheck() == 2){
		total = total-(total/10)
	}
	document.getElementsByClassName('total')[0].textContent = '$' + total

    
}

