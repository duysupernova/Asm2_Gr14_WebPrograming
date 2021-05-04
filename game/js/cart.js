var quantityInputs = document.getElementsByClassName('quantity')
var productInfo = document.getElementsByClassName('product-info')
for (var i = 0; i< quantityInputs.length; i++){
    quantityInputs[i].addEventListener('change', quantityUpdate)

}
function quantityUpdate(event){
    var input = event.target
    if(isNaN(input.value) || input.value < 0){
        input.value = 1;
    }
    if(input.value == 0){
        if (confirm("You want to remove this item?")) {
            input.parentElement.parentElement.remove()
        } else {
            input.value = 1;

          }
    }
    updateTotal()

}

function updateTotal() {
    var price = document.getElementsByClassName("price");
    var quantity = document.getElementsByClassName("quantity");
    var subTotal = 0;
    for (var i = 0; i < quantity.length; i++) {
        var priceSingle = parseFloat(price[i].textContent.replace("$",""))
        var quantitySingle = quantity[i].value
        subTotal += priceSingle * quantitySingle
    }    
    subTotal = Math.round(subTotal * 100) / 100
    var tax = subTotal/10
    var delivery = 5
    if(productInfo.length== 0){
        delivery = 0
    }
    var total = tax + delivery + subTotal
    document.getElementsByClassName('sub-total')[0].textContent = '$' + subTotal
    document.getElementsByClassName('tax')[0].textContent = '$' + tax
    document.getElementsByClassName('delivery')[0].textContent = '$' + delivery
    document.getElementsByClassName('total')[0].textContent = '$' + total

}

