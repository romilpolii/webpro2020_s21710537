/*
    Conditional
*/

        //  1. if, else if & else
//Katergori Usia
let howOld = 23;
if(howOld > 65){
    console.log("Umur anda sekarang : " + howOld + " Anda memasuki Masa Manula");
}else if(howOld >= 56 && howOld <= 65){
    console.log("Umur anda sekarang : " + howOld + " Anda memasuki Masa Lansia Akhir");
}else if(howOld >= 46 && howOld <= 55){
    console.log("Umur anda sekarang : " + howOld + " Anda memasuki Masa Lansia Awal");
}else if(howOld >= 36 && howOld <= 45){
    console.log("Umur anda sekarang : " + howOld + " Anda memasuki Masa Dewasa Akhir");
}else if(howOld >= 26 && howOld <= 35){
    console.log("Umur anda sekarang : " + howOld + " Anda memasuki Masa Dewasa Awal");
}else if(howOld >= 17 && howOld <= 25){
    console.log("Umur anda sekarang : " + howOld + " Anda memasuki Masa Remaja Akhir");
}else if(howOld >= 12 && howOld <= 16){
    console.log("Umur anda sekarang : " + howOld + " Anda memasuki Masa Remaja Awal");
}else if(howOld >= 5 && howOld <= 11){
    console.log("Umur anda sekarang : " + howOld + " Anda memasuki Masa kanak-kanak");
}else if(howOld >= 0 && howOld <= 4){
    console.log("Umur anda sekarang : " + howOld + " Anda masih Balita");
}


        // 2. switch & case
//Jadwal Matakuliah perhari
let jKelas;
let hari  = "Selasa";

switch (hari){
    case "Senin":
    case "Rabu":
        hari = "Analisis dan perancangan sistem, Keamanan komputer, Kecerdasan Buatan";
        break;
    case "Selasa":
        hari = "Pengembangan Perangkat Bergerak, Pemrograman Web, Perancangan Web, Menulis Ilmiah";
        break;
    case "Kamis":
        hari = "Pengembangan Perangkat Bergerak, Pemrograman Web, Perancangan Web";
    break;
    default:
        hari = "Hari Libur";
}
console.log(hari);