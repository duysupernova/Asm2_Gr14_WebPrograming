const cookieBox = document.querySelector(".popup_cookies"),
acceptBtn = cookieBox.querySelector(".buttons button");

//Expire the cookies after 1 month
acceptBtn.onclick = ()=>{
document.cookie = "YourCookies; max-age="+60*60*24*30;
if(document.cookie){
    cookieBox.classList.add("hide"); 
    //if you already accpet, then hide cookie//
}
else{
    alert("Cookie error!");
}
}
let checkCookie = document.cookie.indexOf("YourCookies");
checkCookie != -1 ? cookieBox.classList.add("hide"): cookieBox.classList.remove("hide");