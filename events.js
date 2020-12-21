//Adds event to add-cart buttons (Immediately invoked)
(function addCartBtnEvents(){

    let addCartBtns = document.querySelectorAll(".add-cart");
    let parsedLocalProducts = JSON.parse(localStorage.getItem("localProductList"));

    for (i=0; i<addCartBtns.length; i++){
        console.log("Cart btn added to product");

        addCartBtns[i].addEventListener("click", (e)=>{
            console.log("Click is supposed to add item to cart");
            //Get ID of product
            let btn = e.target;
            let productId = Number(btn.parentElement.getAttribute("id"));
            console.log(Number(btn.parentElement.getAttribute("id")));

            //Use ID to get data from local product list
            let Product = parsedLocalProducts.find(Object => Object.id === productId);
            console.log(Product);
            // parsedLocalProducts

            //Store data in local cart
            addToCart(Product.id, Product.image, Product.name, Product.description, Product.price);
        });
    }
})()