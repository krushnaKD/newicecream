const cartIcon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");
const close = document.querySelector(".close-cart");
const checkout = document.querySelector("#checkout")

cartIcon.addEventListener("click", () => {
    if (cart.classList.contains("active")) {
        cart.classList.remove("active");
    }
    else {
        cart.classList.add("active");
    }
})

close?.addEventListener("click", () => {
    cart.classList.remove("active");
})


checkout.addEventListener("click",() =>{
 
 localStorage.clear();
cart.innerHTML = "you order has been Submited"
})







