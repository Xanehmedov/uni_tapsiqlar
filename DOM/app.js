// const btns=document.querySelectorAll(".btn");
// btns.forEach(btn=>{
//     btn.onclick=function(){
//         alert("eminsiz?",btn.innerHtml)
//     }
// });
// btn1.style.color=
const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const box=document.getElementById("box")
btn1.onclick=function(){
    box.style.cssText=`
    background-color:yellow;
    height:400px;
    width:200px;`;
};
btn2.onclick=function(){
    box.style.cssText=`
    background-color:green;
    height:300px;
    width:300px;
    border-radius:50%;`;
};