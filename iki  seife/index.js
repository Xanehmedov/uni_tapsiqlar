const container=document.getElementById("container");

// function addCard(text_content, link_content) {
//   const div=document.createElement("div");
//   const p=document.createElement("p");
//   const link=document.createElement("a");


//   p.innerHTML=text_content;
//   link.href="id.html#"+link_content;
//   link.innerHTML="a"+link_content;
//   div.append(p,link);
//   div.style.cssText=`border: 2px solid black;
//   margin: 2px`
//   container.appendChild(div);



// }

// fetch("https://northwind.vercel.app/api/customers")
// .then((res)=>res.json())
// .then((data)=>{
//   data.forEach((kart) => {
//     addCard(kart.companyName, kart.id)
//   });
// })






fetch("https://northwind.vercel.app/api/customers")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
     const a=document.createElement("a");
     a.innerText=data[i].id;
     a.href="id.html#"+data[i].id

     a.style.cssText=`
     border: 1px solid black;
     margin-left: 20px;
     width: max-content;`
     container.appendChild(a)
      
    }


  });



