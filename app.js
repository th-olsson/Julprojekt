//Array to store product data
let productList = [];

//Selecting products in dom
const Product_List = document.querySelector(".product-list");

//Creates locally stored products into DOM
updateDOMFromLocalList();

//Constructor for products
function Product(id, image, name, description, price){
    this.id = id;
    this.image = image;
    this.name = name;
    this.description = description;
    this.price = price;
}

function addNewProduct(id, image, name, description, price){
    
    //Store product data in productList array
    productList.push(new Product (id, image, name, description, price));
    
    //Convert from array to store product data locally in localProductList
    localStorage.setItem("localProductList", JSON.stringify(productList));
}

//Uses data from local productList array to create a DOM counterpart
function updateDOMFromLocalList(){

    //Remove previous DOM product list
    document.querySelector(".product-list").remove();

    //Add new DOM product list
    let newProductList = document.createElement("div");
    newProductList.classList.add("product-list");
    
    //Append new DOM product list into main
    document.querySelector("main").appendChild(newProductList);

    //Blueprint for new products in DOM
    function productBlueprint(id, image, name, description, price){

        let newProduct = document.createElement("div");
        newProduct.classList.add("product-card");
     
        newProduct.innerHTML =`
        <div id="${id}" class="product-card">
            <img class ="product-img" alt="Produktbild" src="${image}">
            <div class="product-info">
                <span class="product-name">${name}</span>
                <span class="product-description">${description}</span>
                <span class="product-price">${price}</span>
            </div>
            <button class="add-cart">Lägg till i kundvagn</button>
        </div>
        `;

        return newProduct;
    }

    //Convert local list to array
    let parsedLocalList = JSON.parse(localStorage.getItem("localProductList"));
    //Iterate through list and use data through productBlueprint to create new products in DOM
    for (i=0; i<parsedLocalList.length;i++){
        //Add product to DOM
        newProductList.appendChild(productBlueprint(parsedLocalList[i].id, parsedLocalList[i].image, parsedLocalList[i].name, parsedLocalList[i].description, parsedLocalList[i].price));
    }
}