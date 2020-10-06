// let buah = ["mangga","pisang", "anggur"];
// let buah1 = [0];
// let buah2 = [1];
// let buah3 = [2];

// console.log(buah1);
// console.log(buah2);
// console.log(buah3); //tidak efisien


        //Destrukturisasi Array

// let buah = ["mangga","pisang", "anggur"];
// let [buah1, buah2, buah3] = buah;
// console.log(buah1);
// console.log(buah2);
// console.log(buah3);

//     //gunakan koma kosong untuk melewati element
// let [firstName, ,lastName, ,buku] = ["Jhon", "k", "Rowling", "Pengarang","Hary Poter"];
// console.log(firstName);
// console.log(lastName);
// console.log(buku); // nilai ke 2 dan ke 4 tidak ikut tersimpan karena dikosongkan


    //menukar nilai variabel.
// let a = 10;
// let b = 15;
// let temp = a;
// a=b;
// b=temp;
// console.log(a);

//kita ganti dengan cara berikut :
// let a = 10;
// let b = 15;
// [a,b] = [b,a];
// console.log(b)



        //Destrukturisasi Objek
// let orang ={
//     nama: "miki",
//     umur: 18,
//     sudahMenikah: false
// };
// let nama = orang.nama;
// let umur = orang.umur;
// let sudahMenikah = orang.sudahMenikah;
// console.log(nama);
// console.log(umur);
// console.log(sudahMenikah); //kurang efisien


// let orang ={
//     nama: "miki",
//     umur: 18,
//     sudahMenikah: false
// };
// //destrukturisasi objek
// let {nama, umur, statusMenikah} = orang //akan undifined karna beda nama
// //let {nama, umur, sudahMenikah:statusMenikah} = orang
// console.log(nama);
// console.log(umur);
// console.log(statusMenikah);


    //destrukturisasi objek bertingkat
let murid = {
    kelas: "12a",
    nama: ["ani", "yahya", "sinto"],
    prestasi:{
        olahraga: "juara 1",
        akademik: "Juara 2"
    }
};
let {
    prestasi: {olahraga,akademik}
} = murid;
console.log(akademik);