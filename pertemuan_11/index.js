//         // Arrow Function

// function ucapkanSalam() {
//     return "Selamat Pagi";
// };
// console.log(ucapkanSalam())


//     //metode arrow function
//     //1. Fungsi dengan parameter
// const penjumlahan = (bilangan1, bilangan2) =>{
//     const hasil = bilangan1 + bilangan2;
//     return hasil;
// };
// console.log(penjumlahan(3,4));


//     //2. Fungsi tanpa parameter
// const jenisAnjing = () => {
//     const anjing = ["Pug", "Bulldog", "Poodle"];
//     return anjing[Math.floor(Math.random()*(anjing.length))]
// }
// console.log(jenisAnjing())


//     //Implicit Return Value
// //yang biasa
// function greeting(nama){
//     return `Hi ${nama}`;
// }
// console.log(greeting("Romil"));

// //use arrow function
// const inisial = (nama) => `Hi ${nama}`;
// console.log(inisial("Romiil"));


        //Exercise #3
    //conver to ES6 Syntax
const yearUntilRetirement = (year, firstName)=>{
    let age = 2020 - year;
    let retirement = 60 - age;
    if (retirement > 0){
        return (`${firstName} will retired in ${retirement} years`);
    }else{
        return(`${firstName} is already retired.`);
    }
}
console.log(yearUntilRetirement(1997, "Romil"));