// code added for sort product finction...

function sort_products(){
    var sel = document.getElementById("sort_select");
    var opt = sel.options[sel.selectedIndex];
    window.location.href = "product.php?sort="+opt.value;
}
  
