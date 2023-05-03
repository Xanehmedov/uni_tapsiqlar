fetch("https://restcountries.com/v3.1/name/aze")
.then((Response)=>Response.json())
.then(data=> {
    console.log("olke",data[0].name.common);
    console.log("paytaxt",data[0].capital[0]);
    console.log("qonsu olkeler",data[0].borders);
    data[0].borders.forEach((elem)=> {
    console.log(elem)
})

    
});