var cartContainer = document.getElementById("cartContainer")
var close = document.getElementById("close");
var add = document.getElementById("add")


add.addEventListener("click" , function addToCart(){
    cartContainer.style.display = "flex" ;
})
close.addEventListener("click" , closeBtn)
function closeBtn(){
    cartContainer.style.display = "none" ;
}



