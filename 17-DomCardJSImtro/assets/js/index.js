const mavi_reng=document.getElementById("mavi_reng");
const keyta=document.getElementById("keyta");
const pul_metin=document.getElementById("pul_metin");



mavi_reng.addEventListener("click",function () {
keyta.style.backgroundColor="green"
pul_metin.textContent="USD 450,00"    
});


const reqem=document.querySelector(".reqem");
for(let i=0; i<reqem.children.length; i++){
    reqem.children[i].addEventListener("click",()=>{
        for(let j=0; j<reqem.children.length; j++){
            reqem.children[j].style.cssText=``;
        }
        reqem.children[i].style.cssText=`
        height: 22px;
        width: 22px;
        border-radius: 100%;
        background-color: lawngreen;`
    });
}

const reng_qirmizi=document.getElementById("reng_qirmizi");
const ayaqqabi_2=document.getElementById("ayaqqabi_2");

reng_qirmizi.addEventListener("click",function () {
    keyta.style.backgroundColor="red";
    ayaqqabi_2.style.transform="rotate(-5deg)";
    ayaqqabi_2.style.position="absolute";
    ayaqqabi_2.style.width="130%";
    ayaqqabi_2.style.bottom="-30%";
    ayaqqabi_2.style.left="-54%";
    ayaqqabi_2.style.transitionDuration="1s"

})

const iconlar=document.querySelectorAll(".iconlar");
console.log(iconlar)
for (let i = 0; i < iconlar.length; i++) {
    iconlar[i].addEventListener("click",function (e) {
        for (let j = 0; j < iconlar.length; j++) {
            if(j<=i){
                iconlar[j].style.color="gold"
            }
            else{
                iconlar[j].style.color="black";
            }
        }
        
    })
    
}
