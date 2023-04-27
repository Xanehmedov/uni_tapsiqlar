const account=document.getElementById("create-account-bg");
const Name=document.getElementById("Full-name");
const Email=document.getElementById("Email")

//2 citapsiriq evveli fdeyisen
const number=document.getElementById("number");
const Repaetnumber=document.querySelector("#number2");
// console.log('num', number);
// console.log('Rnum', Repaetnumber);
//2 citapsiriq sonu

// account.addEventListener("click",function (e) {
//     console.log(Name.value);
//     console.log(Email.value);


//     (e).preventDefault();
// })


// 2 citapsiriq evveli
// let arr=[];

// number.addEventListener("keyup",function (e) {
// Repaetnumber.value=number.value

// e.preventDefault();
// })
//2 citapsiriq evveli son
// 3) yuxaridakilari object kimi console cixartmaq
let arr=[];
account.addEventListener("click",function (e) {
    let object={
        surname: "",
        email: "",
    }
    object.surname=Name.value
    object.email=Email.vaule
    console.log(arr);
    e.preventDefault();
})