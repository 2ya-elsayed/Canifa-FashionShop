let cartContainer = document.getElementById("cartContainer")
let close = document.getElementById("close");

close.addEventListener("click" , function closeBtn(){
    cartContainer.style.display = "none"  ;
})

function addToCart(eventInfo){
    cartContainer.style.display = "flex" ;
}