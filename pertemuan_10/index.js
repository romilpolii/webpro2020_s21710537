    // var, let, const

// let nama = "Romil";
// let nama = "Polii";
// console.log(nama); 
// //tidak boleh mendeklarasikan dengan nama yang sama.



    //scope dama JS
    //1. function scope (var)
    //2. block scope
// for (var i=0; i<10; i++){
//     console.log(i) // bisa di akses dari luar, karna var mengandung no. 1
// }
// console.log(i);



// //cara agar var tidak bisa di akses dari luar.
// function tes(){
// for (var i=0; i<10; i++){
//     console.log(i)
//     }
// }
// tes();
// console.log(i); //eror karna hanya bisa di akses dalam function. ini yang benar.


// (function tes(){
//     for (var i=0; i<10; i++){
//         console.log(i)
//     }
// })();
// tes();
// console.log(i);


// for (let i=0; i<10; i++){
//     console.log(i);
// }
// console.log(i)


// {
// let i;
// for (let i=0; i<10; i++){
//     console.log(i);
//     }
// }
// console.log(i)


const person ={
    fistName: "Romil",
    lastName: "Polii",
    age: 23,
};

console.log(
    "Hallo nama saya "+person.fistName+
    " "+person.lastName+
    ". Umur saya "+person.age+
    " tahun."
);

console.log(
    `Hallo nama saya ${person.fistName} ${person.lastName}. Umur saya ${person.age} tahun.`
    )