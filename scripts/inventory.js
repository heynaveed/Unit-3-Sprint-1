let pro_data = JSON.parse(localStorage.getItem("products"))||[];

pro_data.forEach(function(elem,index){

    let box = document.createElement("div");
    box.setAttribute("id","box");

    let image = document.createElement("img");
    image.setAttribute("src",elem.image);
    image.setAttribute("id","image");

    let type = document.createElement("p")
    type.setAttribute("id","type");
    type.innerText = "Type: "+elem.type;

    let description = document.createElement("p")
    description.setAttribute("id","desc");
    description.innerText= "Discription: "+elem.description

    let price = document.createElement("p");
    price.setAttribute("id","price");
    price.innerText ="Price: " +elem.price

    let remove = document.createElement("button");
    remove.setAttribute("id","remove");
    remove.innerText="Remove"
    remove.addEventListener("click",function(){
        funremove(elem,index)
    })

    box.append(image,type,description,price,remove);
    document.getElementById("all_products").append(box);
});

function funremove(elem,index){
    pro_data.splice(index,1)
    localStorage.setItem("products",JSON.stringify(pro_data));
    window.location.reload();
}

document.getElementById("button").addEventListener("click",button);
function button(){
    window.location.href="index.html"
}
    