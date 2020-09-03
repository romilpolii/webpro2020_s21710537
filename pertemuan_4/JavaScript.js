// function

/*
//perhitungan secara manual tanpa function
let a = 8;
let b = 3;
let c = 10;
let d = 5;

let LuasA = a*a;
let LuasB = b*b;
let total = LuasA+LuasB;
console.log(total);



//perhitungan dengan menggunakan function
function penjumlahanDuaBujurSangkar(a, b){
    let LuasA = a*a;
    let LuasB = b*b;

    let total = LuasA + LuasB;
    return total;
}
console.log(penjumlahanDuaBujurSangkar(8, 3));
console.log(penjumlahanDuaBujurSangkar(10, 5));



//Refactoring
function penjumlahanDuaBujurSangkar(a, b){
    return a*a + b*b;
}
console.log(penjumlahanDuaBujurSangkar(8, 3));
console.log(penjumlahanDuaBujurSangkar(10, 5));

function tambah( a, b){
    return a+b;
}
function kali(a,b){
    return a*b;
}
console.log(tambah(kali(5, 2), kali(10, 2)));



//function declaration
console.log(penjumlahanDuaBujurSangkar(8, 3));
console.log(penjumlahanDuaBujurSangkar(10, 5));
function penjumlahanDuaBujurSangkar(a, b){
    return a*a + b*b;
}
console.log(tambah(kali(5, 2), kali(10, 2)));

function tambah( a, b){
    return a+b;
}
function kali(a,b){
    return a*b;
}
*/



//function expretion
const penjumlahanDuaBujurSangkar = function (a, b){
    return a*a + b*b;
}
console.log(penjumlahanDuaBujurSangkar(8, 3));
console.log(penjumlahanDuaBujurSangkar(10, 5));




//Function scope Lingkup Global
/*const olahraga = 'basketball';

function namaAtlet() {
  let atlet = 'Lionel Messi';
  const noMessi = 10;
  console.log(olahraga); // Output: basketball
  if (olahraga === 'basketball') {
     atlet = 'Kobe Bryant';
     const noKobe = 24;
     console.log(olahraga); // Output: basketball
  }
  return atlet;
}

console.log(namaAtlet()); // Output: Kobe Bryant
console.log(olahraga); // Output: basketball
*/




//Function scope Lingkup Local
const olahraga = 'basketball';

function namaAtlet() {
  let atlet = 'Lionel Messi'; // lingkup fungsi
  const noMessi = 10; // lingkup fungsi
  if (olahraga === 'basketball') { 
     atlet = 'Kobe Bryant';
     const noKobe = 24; // lingkup blok
     console.log(noMessi); // Output: 10  
  }
  console.log(noKobe); // Output: Uncaught ReferenceError: noKobe is not defined
  return atlet;
}

namaAtlet();
