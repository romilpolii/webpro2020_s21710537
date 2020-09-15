/*
    Object
*/

//const mahasiswa1 = ["John", "Doe", 31, true];

        //1. Object Literal
const mhs1 = {
    namaDepan: "John",
    namaBelakang: "Doe",
    umur: 31,
    sudahLulus: true,
    alamat: {
        jalan: "Jln. Arnold Mononutu",
        kecamatan: "Airmadidi",
        kabupaten: "Minahasa Utara",
    },
    IPSemester: [3.05, 3.25, 3.0, 3.4],
    hitungIPK: function(){
        let total = 0;
        this.IPSemester.forEach(function(el){
            total = total + el;
        });
        this.IPKumulatif = total / 4;
    },
};

delete mhs1.namaBelakang;
console.log(mhs1);


//     //contoh mengakses properti object
// console.log (mhs1.alamat.jalan);
// console.log(mhs1.IPSemester[2]);
// mhs1.hitungIPK();
// console.log(mhs1);


//         //2. Kata kunci NEW
// const mhs2 = new Object();
// mhs2.namaDepan = "Jane";
// mhs2.namaBelakang = "Smith";


// //3. Mengakses properti object
//         //a. Dot notation
// console.log(mhs1.umur);
//         //b. Brecket notation
// console.log(mhs1["namaBelakang"]);


        //Array Object (JSON)
const mahasiswa = [
    {
        nim: "001",
        namaDepan: "John",
        namaBelakang: "Doe",
    },
    {
        nim: "001",
        namaDepan: "Jane",
        namaBelakang: "Smith",
    },
    {
        nim: "001",
        namaDepan: "Romil",
        namaBelakang: "Polii",
    },
];

mahasiswa.forEach(function(el){
    console.log(el);
});