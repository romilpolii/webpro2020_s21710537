// 1. Array

// Deklarasi Array
// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(angka);
// let buah = ["mangga", "apel", "jeruk"];
// console.log(buah);

// let arr = ["text", 1, true];
// console.log(arr);

// let myFunc = function(){
//     return "Hello Array";
// };

// let arr2 = ["text", 1, true, myFunc(), [1, 2, 3, 4, 5]];
// //untuk akses elemen dalam array
// console.log(arr2[2]);
// console.log(arr2[3]);
// console.log(arr2[4][2]);

// console.log(typeof arr2);
// console.log(arr2.length);

// //Deklarasi array menggukanakn key new
// let buah2 = new Array("salak", "jambu", "meloh");
// console.log(buah2);



//Manipulasi Array
//Menambah Array
// let mhs = [];
// mhs [0] = 'Bob';
// mhs [1] = 'Marley';
// mhs [2] = 'Diablo';
// mhs [3] = 'kons';

// console.log(mhs);

// //2. Mengubah isi Array
// mhs[3] = "Diana";
// console.log(mhs);

// //3. Menghapus isi Array
// mhs[2] = undefined;
// console.log(mhs);

//4. Menampilkan isi Array
// let mhs = ["john", "bob", "jane", "peter"];

// for (let i=0; i<mhs.length; i++){
//     console.log("Mahasiswa ke-" + (i+1) + " adalah " + mhs[i]);
// }



//Method dalam Array
//1. Length

//2. toString
// let mhs = ["john", "bob", "jane", "peter"];
// console.log(mhs.toString());

// //3. join
// console.log(mhs.join("* "));

//4. Push, PoP, Unshift, shift
//let mhs = ["john", "bob", "jane", "peter"];
// mhs.push("May");
// mhs.push("chin");
// console.log(mhs.join("* "))
// mhs.pop();
// mhs.pop();
// console.log(mhs.join("- "))

// mhs.unshift("May");
// mhs.unshift("chin");
// console.log(mhs.join("* "))
// mhs.shift();
// mhs.shift();
// console.log(mhs.join("- "))



// //5. Concat
// let buah = ["nangka", "buah naga", "cerry"];
// let sayur = [ "kangkung", "sawi", "labu"];
// let makanan = sayur.concat(buah);
// console.log(makanan);


//6. Splice dan Slice
//a. splice
// let buah = ["pisang", "mangga", "apel", "jeruk"];
// buah.splice(2, 0, "melon","semangka");
// console.log(buah.join("- "));

// //b. slice
// let buah2 = buah.slice(0, 3);
// console.log(buah2.join("- "));



// 7. forEach dan map
// a. forEach

// for (let i=0; i<mhs.length; i++){
//     console.log("Mahasiswa ke-" + (i+1) + " adalah " + mhs[i]);
// }

// let angka = [1, 2, 3, 4, 5, 6,7 , 8];
// let tampilAngka = function(el){
//     console.log(el)
// };
// angka.forEach(tampilAngka);

// //b. map
// let angka2 = angka.map(function(el){
//     return el;
// });
// console.log(angka2);



//8. sort
let angka = [1, 100, 2, 20, 5, 3, 7, 8];
let mhs = ["john", "bob", "erick"];
mhs.sort();
console.log(mhs);
angka.sort(function(a,b){
    return a - b;
});
console.log(angka);




//9. Filter
let angka = [1, 100, 2, 20, 5, 3, 7, 8];

let angka2 = angka.filter(function (el) {
    return el > 5;
});
console.log(angka2);