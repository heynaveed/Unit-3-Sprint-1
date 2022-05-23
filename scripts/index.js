//store the products array in localstorage as "products"
document.querySelector("form").addEventListener("submit",funform);

function Product(type,description,price,image){
    this.type = type;
    this.description = description;
    this.price = price;
    this.image = image;
}

let arr = JSON.parse(localStorage.getItem("products")) || [];
function funform(){
    event.preventDefault();
    let type = document.getElementById("type").value ;
    let description = document.getElementById("desc").value; 
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    let p = new Product(type,description,price,image)
    arr.push(p);
    console.log(p)

    localStorage.setItem("products",JSON.stringify(arr));

    document.getElementById("type").value=null;
    document.getElementById("desc").value = null;
    document.getElementById("price").value = null;
    document.getElementById("image").value = null;

}

document.getElementById("button").addEventListener("click",button);

function button(){
    window.location.href="inventory.html"
}