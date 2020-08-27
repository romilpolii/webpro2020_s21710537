//coding dari external file
console.log("hello World, From external file")


// 1. variabell dan tipe data

const firstName = "Romil"; //tidak bisa berubah atau diganti, tipe data string
let age = 23; //variabel yang bisa diganti atau berubah, tipe data number
const isMarried = true; //tipe data boolean yaitu true or false

console.log("My name is "+firstName+", i'm "+age+" years old, "+isMarried);//console penting untuk menampilkan hasil pada lab console di browser dan menjadi tipe data string

//menampilkan tipe data lewat warna (type version)
console.log(firstName);
console.log(age);
console.log(isMarried);
console.log(age +" "+ isMarried);

//contoh operator (untuk mengetahui tipe data)
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarried);

const info = "My name is "+firstName+", i'm "+age+" years old, "+isMarried;
console.log(typeof info);

/*
function helloWorld(){
    var hello = "hello World";
    console.log(hello);
}
helloWorld(); 

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);*/

let bilangan = 1;

console.log(bilangan == "10"); //loose equality
console.log(bilangan ==="10"); //strict equality