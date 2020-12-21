//Returns new product button. 
function newProductButton(){
    let button = document.createElement("button");
    button.classList.add("add-product");

    return button;
}

//Returns new edit button
function editButton(){
    let button = document.createElement("button");
    button.classList.add("edit-btn");

    return button
}

//Returns new form for editing product info ( !! take inputs to function addNewProduct() !! )
function editForm(){
    let form = document.createElement("form");
    form.classList.add("edit-form");

    form.innerHTML =`
    <label for=""></label><input id=""></input>
    <label for=""></label><input id=""></input>
    <label for=""></label><input id=""></input>
    <button class ="save-btn">Spara produkt</button>
    `;

    return form;
}