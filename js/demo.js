var inputname = document.getElementById("name");
var outname = document.getElementById("reqname");
inputname.addEventListener("input", function (e) {
  if (inputname.value.length > 3) {
    inputname.style.border = "5px solid green";
    outname.innerHTML = "";
  } else {
    inputname.style.border = "5px solid red";
    console.log(typeof inputname.value);
    outname.innerHTML = "Please Name lenght Greater than 3 Letters";
    outname.style.color = "red";
  }
});

//////////////////////////////////////////////////////////
var inputemail = document.getElementById("email");
var outemail = document.getElementById("reqemail");
var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

inputemail.addEventListener("input", function (e) {
  var vemail = inputemail.value;
  var result = emailRegex.test(vemail);
  if (result == false) {
    outemail.innerHTML = "Email is must format =ali@123.com";
    inputemail.style.border = "5px solid red";
    outemail.style.color = "red";
  } else {
    outemail.innerHTML = "";
    inputemail.style.border = "5px solid green";
  }
});

//////////////////////////////////////////////////////////

var inputpass = document.getElementById("password");
var outpass = document.getElementById("reqpassword");

inputpass.addEventListener("input", function (e) {
  if (inputpass.value.length < 8) {
    inputpass.style.border = "5px solid red";
    outpass.innerHTML = "Password length Less than 8 Numbers";
    outpass.style.color = "red";
  } else {
    inputpass.style.border = "5px solid green";
    outpass.innerHTML = "";
  }
});

///////////////////////////////////////////////////////////////

var inputconfirm = document.getElementById("confirm");
var outconfirm = document.getElementById("reqconfirm");

inputconfirm.addEventListener("input", function (e) {
  if (inputpass.value !== inputconfirm.value) {
    inputconfirm.style.border = "5px solid red";
    outconfirm.innerHTML = "Passwords do not match!";
    outconfirm.style.color = "red";
  } else {
    inputconfirm.style.border = "5px solid green";
    outconfirm.innerHTML = "Passwords match! Form submitted.";
    outconfirm.style.color = "green";
  }
});

////////////////////////////////////////////////
function goToNewPage() {
  if (inputname.value == "") {
    inputname.style.border = "5px solid red";
    outname.innerHTML = "Please Enter Name ";
    outname.style.color = "red";
  }
  if (inputemail.value == "") {
    outemail.innerHTML = "Please Enter Email";
    inputemail.style.border = "5px solid red";
    outemail.style.color = "red";
  }
  if (inputpass.value == "") {
    inputpass.style.border = "5px solid red";
    outpass.innerHTML = "Please Enter Password";
    outpass.style.color = "red";
  }
  if (inputconfirm.value == "") {
    inputconfirm.style.border = "5px solid red";
    outconfirm.innerHTML = "Please Enter Password";
    outconfirm.style.color = "red";
  } else {
    window.location.href = "/html/home.html";
    let nameCookie = (document.cookie = "userName" + "=" + inputname.value);
    console.log(document.cookie);
  }
}
