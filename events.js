//Adds event to add-cart buttons
function addCartBtnEvents(){

    let addCartBtns = document.querySelectorAll(".add-cart");

    for (i=0; i<addCartBtns.length; i++){

        addCartBtns[i].addEventListener("click", ()=>console.log("Add to cart"))
    }
}