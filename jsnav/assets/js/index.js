// const icon=document.getElementById("icon");
// const seife=document.getElementsByClassName("seife");



// icon.addEventListener("click",function (e) {
//     seifeler.classList.toggle("elave")
// })
let x=true;
const gerb=document.getElementById("gerb");
const kart_container=document.getElementById("kart_container")


gerb.addEventListener("click",function (e) {
  if(x){
    kart_container.style.backgroundColor="black";
    kart_container.style.color="white";
  }else{
    kart_container.style.backgroundColor="blue";
    kart_container.style.color="black";
  }
  x=!x
})