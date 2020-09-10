/*
    Loop
*/

        //1. For Loop
for (let i=0; i!=10; i++){
    console.log(i);
}

        //2. for/in loop
const baju = {
    Brand : "Komik Stand",
    Bahan : "Sutra",
    Jumlah : "500 pcs",
};
for (y in baju){
    console.log(y, ':', baju[y]);
}


        //3. for/of loop
const buku = ["Game of Thrones: a Song of Ice and Fire",
"Harry Potter and The Philosopher's Stone", "Lord of The Rings: The Fellosship of The Ring"];
for (y of buku){
    console.log(y);
}

        //4. While loop
let nilai = 10;
while (nilai<=20){
    console.log(nilai);
    nilai++;
}


        //5. do while loop
let angka = 50
do{
    console.log(angka);
    angka++;
}while(angka<= 55);