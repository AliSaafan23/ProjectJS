let id = document.cookie.split(";")[1];
let idvalue = Number(id.split("=")[1]);
console.log(idvalue);

import { products } from "./products.js";
console.log(products);
let filterid = products.filter((item) => {
  return item.id == idvalue;
});
console.log(filterid);

//===========image&id
let imgdetails = document.querySelectorAll(".container .serv img ")[0];
console.log(imgdetails);
let namedetails = document.querySelectorAll(".container .serv #nameProduct ");
let pricedetails = document.querySelectorAll(".container .serv #price ");
let category = document.querySelectorAll(".container .serv #category ");

for (let i = 0; i < filterid.length; i++) {
  imgdetails.setAttribute("src", `${filterid[i].imgSrc}`);
  namedetails[i].innerHTML = `${filterid[i].name}`;
  pricedetails[i].innerHTML = `Price: ${filterid[i].price}$`;
  category[i].innerHTML = `Category: ${filterid[i].category}`;
}
//===============================================================

document.addEventListener("DOMContentLoaded", function () {
  let openpagecart = document.getElementById("opencart");
  openpagecart.addEventListener("click", function () {
    window.location.href = "/html/cart.html";
  });
});

//==================================================================
document.addEventListener("DOMContentLoaded", function () {
  let quantity = document.getElementById("quantity");
  let plus = document.getElementById("add");
  console.log(plus);
  plus.addEventListener("click", function () {
    for (let i = 0; i < filterid.length; i++) {
      quantity.innerHTML = `Quantity: ${filterid[i].counter++}`;
    }
  });
});
