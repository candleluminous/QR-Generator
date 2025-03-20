let divimg = document.querySelector(".imgbox");
let imgqr = document.querySelector("#qrimg");
let box = document.querySelector(".imgbox");
let inptext = document.querySelector("#inp");
const btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
    imgqr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&bgcolor=fff&data="+inptext.value;
    box.style.display = "block";
});

