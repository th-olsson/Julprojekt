//Array to store items added to shopping cart
let cart = [];
//Counts number of items in cart
let cartCounter;

function addToCart(id, image, name, description, price){

    //Store product data in cart array
    cart.push(new Product (id, image, name, description, price));
    
    //Convert from array to store product data locally in localCart
    localStorage.setItem("localCart", JSON.stringify(cart));
    updateDOMFromLocalCart();
}


//Uses data from local localCart array to create a DOM counterpart
function updateDOMFromLocalCart(){

    //Remove previous DOM cart list
    document.querySelector(".dropdown-content").remove();

    //Add new DOM cart list
    let dropDownContent = document.createElement("ul");
    dropDownContent.classList.add("dropdown-content");

    //Append new DOM cart content into dropdown
    document.querySelector(".cart-dropdown").appendChild(dropDownContent);

    //Blueprint for cart dropdown list in DOM
    function cartBlueprint(image, name, price){

            let dropDownItem = document.createElement("li");
            dropDownItem.classList.add("dropdown-item");
            dropDownItem.innerHTML = `
            <img class="dropdown-thumbnail" src="${image}" alt="Produktbild" width="37px" height="37px">
            <span class="dropdown-name">${name}</span>
            <span class="dropdown-quantity-and-price">

                <input class="dropdown-quantity" type="number" value="1">
                <span class="dropdown-price">${price}</span>
                <button class="cart-item-remove">x</button>
            
            </span>
            `;

            return dropDownItem;
    }

    //Convert local list to array
    let parsedCart = JSON.parse(localStorage.getItem("localCart"));
    //Iterate through list and use data through productBlueprint to create new cart list items in DOM
    for (i=0; i<parsedCart.length; i++){
        //Add item to DOM
        dropDownContent.appendChild(cartBlueprint(parsedCart[i].image, parsedCart[i].name, parsedCart[i].price));
    }

    //Update cart item count
    cartCounter = parsedCart.length;
    document.querySelector(".cart-count").innerHTML= cartCounter;
}