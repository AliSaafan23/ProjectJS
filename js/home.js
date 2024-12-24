let userName = document.cookie.split("=")[1].split(";")[0];
let spanname = document.getElementById("name");
spanname.innerHTML = `Welcome ${userName}`;
//=====================================Product
import { products, productsslid } from "./products.js";
// =================================Get image in product
let imgslide = [];
console.log(products);
for (let i = 0; i < productsslid.length; i++) {
  let element = productsslid[i].imgSrc;
  imgslide.push(element);
}
console.log(imgslide);
//===========================================slider
let slides = document.getElementById("slides");
console.log(slides);
document.addEventListener("DOMContentLoaded", function () {
  // let currentIndex = 0;

  for (let i = 0; i < productsslid.length; i++) {
    let newImg = document.createElement("img");
    newImg.setAttribute("src", `${imgslide[i]}`);
    console.log(newImg);
    slides.appendChild(newImg);
  }
  let slidesg = document.querySelectorAll(".slides img");
  console.log(slidesg);
  let currentIndex = 0;

  const totalSlides = slidesg.length;
  console.log(totalSlides);
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  function showSlide(index) {
    const offset = -index * 100;
    document.querySelector(
      ".slides"
    ).style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", function () {
    currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });

  nextButton.addEventListener("click", function () {
    currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  });

  // Optional: Auto-slide
  setInterval(function () {
    currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  }, 3000); // Change slide every 3 seconds
});

//==========================================filteration shose
let btnshose = document.getElementById("shose");

btnshose.addEventListener("click", function Shose(params) {
  let imgshose = [];
  let nameshose = [];
  let priceshose = [];
  let idshose = [];
  let filtershose = products.filter((item) => {
    return item.category == "shoes";
  });

  console.log(filtershose);

  for (let i = 0; i < filtershose.length; i++) {
    let imgsh = filtershose[i].imgSrc;
    let nmesh = filtershose[i].name;
    let pricesh = filtershose[i].price;
    let idsh = filtershose[i].id;
    imgshose.push(imgsh);
    nameshose.push(nmesh);
    priceshose.push(pricesh);
    idshose.push(idsh);
  }
  console.log(idshose);

  //===========image&id
  let spanimg = document.querySelectorAll(".container .serv img ");
  for (let i = 0; i < spanimg.length; i++) {
    spanimg[i].setAttribute("src", `${imgshose[i]}`);
    spanimg[i].setAttribute("id", `${idshose[i]}`);
  }
  //=============name
  let pname = document.querySelectorAll(".container .serv #nameProduct ");
  console.log(pname[0]);
  for (let i = 0; i < pname.length; i++) {
    pname[i].innerHTML = `${nameshose[i]}`;
  }

  //================prise
  let pprice = document.querySelectorAll(".container .serv #price ");
  console.log(pprice);
  for (let i = 0; i < pprice.length; i++) {
    pprice[i].innerHTML = `${priceshose[i]}$`;
  }
});
//==========================================filteration Clothes
let btnclothes = document.getElementById("clothes");
btnclothes.addEventListener("click", function Clothes(params) {
  let imgclothes = [];
  let nameclothes = [];
  let priceclothes = [];
  let idclothes = [];
  let filterclothes = products.filter((item) => {
    return item.category == "clothes";
  });
  console.log(filterclothes);

  for (let i = 0; i < filterclothes.length; i++) {
    let imgcl = filterclothes[i].imgSrc;
    let nmecl = filterclothes[i].name;
    let pricecl = filterclothes[i].price;
    let idcl = filterclothes[i].id;
    imgclothes.push(imgcl);
    nameclothes.push(nmecl);
    priceclothes.push(pricecl);
    idclothes.push(idcl);
  }

  //===========image&id
  let spanimg = document.querySelectorAll(".container .serv img ");
  for (let i = 0; i < spanimg.length; i++) {
    spanimg[i].setAttribute("src", `${imgclothes[i]}`);
    spanimg[i].setAttribute("id", `${idclothes[i]}`);
  }

  //=============name
  let pname = document.querySelectorAll(".container .serv #nameProduct ");
  console.log(pname[0]);
  for (let i = 0; i < pname.length; i++) {
    pname[i].innerHTML = `${nameclothes[i]}`;
  }
  //================prise
  let pprice = document.querySelectorAll(".container .serv #price ");
  console.log(pprice);
  for (let i = 0; i < pprice.length; i++) {
    pprice[i].innerHTML = `${priceclothes[i]}$`;
  }
});
//==========================================filteration phone
let btnphone = document.getElementById("phone");
btnphone.addEventListener("click", function Phone(params) {
  let imgphone = [];
  let namephone = [];
  let pricephone = [];
  let idphone = [];

  let filterphone = products.filter((item) => {
    return item.category == "phone";
  });
  console.log(filterphone);
  for (let i = 0; i < filterphone.length; i++) {
    let imgph = filterphone[i].imgSrc;
    let nmeph = filterphone[i].name;
    let priceph = filterphone[i].price;
    let idph = filterphone[i].id;

    imgphone.push(imgph);
    namephone.push(nmeph);
    pricephone.push(priceph);
    idphone.push(idph);
  }

  //===========image&id
  let spanimg = document.querySelectorAll(".container .serv img ");
  for (let i = 0; i < spanimg.length; i++) {
    spanimg[i].setAttribute("src", `${imgphone[i]}`);
    spanimg[i].setAttribute("id", `${idphone[i]}`);
  }

  //=============name
  let pname = document.querySelectorAll(".container .serv #nameProduct ");
  console.log(pname[0]);
  for (let i = 0; i < pname.length; i++) {
    pname[i].innerHTML = `${namephone[i]}`;
  }

  //================prise
  let pprice = document.querySelectorAll(".container .serv #price ");
  console.log(pprice);
  for (let i = 0; i < pprice.length; i++) {
    pprice[i].innerHTML = `${pricephone[i]}$`;
  }
});

//===========================================Open viewproduct==============================================================
document.addEventListener("DOMContentLoaded", function () {
  let openpageview = document.querySelectorAll(".container .serv #img img ");

  // Add a click event listener to each button
  openpageview.forEach(function (button) {
    button.addEventListener("click", function () {
      document.cookie = "id" + "=" + this.getAttribute("id");
      window.location.href = "/html/viewproduct.html";
    });
  });
});
