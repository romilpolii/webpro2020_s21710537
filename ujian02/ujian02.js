//Bagian 1. Ubahlah syntax ES5 berikut ke dalam ES6

//     //1.  
// const calculateAge = (birthYear)=>{
// 	return 2019 - birthYear;
// }
// const yearUntilRetirement = (object)=>{
// 	let age = calculateAge(object.year);
// 	let retirement = 60 - age;  
// 	if(retirement > 0){
//     	console.log(`${object.firstName} retires in ${retirement} years`);
// 	} else {
//     	console.log(`${object.firstName} is already retired.`);
// 	}
// }
// yearUntilRetirement({year: 1987, firstName: 'John'});
 
    //2.  	
// const addNumber = [1,2,3,4,5,6,7];
//     let numbers = addNumber.map ((sum) =>{
//         return sum.toString(2)
//     })
// console.log(addNumber);
//NOTE: please use the map function
 

//     //3.  	
// let phi = 3.14;
// let power = 2;
// let radius = 0; 
// let calculateArea = (obj) => {
//   return phi * Math.pow(obj.radius, obj.power);
// };
// radius = 21;
// const area21 = calculateArea({radius: radius, power: 2 });
// radius = 7;
// const area7 = calculateArea({radius: radius, power: 2 });
// console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

//     //4.  
// const makeAjaxRequest = (url, method) => {
//     return `${url}, ${method}`
// }
// console.log(makeAjaxRequest('www.google.com', 'GET'));


/* Buat sebuah function warnaKesukaan dengan parameter warna, 
berikan "putih" sebagai default parameter untuk warna 
dan kembalikan "Warna kesukaan saya adalah " + warna.
(Note: Gunakan arrow function dan Template literals).

*/
    //1
// const warnaKesukaan = (warna) => {
//     return `Warna kesukaan saya adalah ${warna}`;
// }
// console.log(warnaKesukaan('putih'));


    //2
/*Gunakan spread operator untuk menggabungkan namaBuah1 dan namaBuah2, 
dan masukkan hasilnya ke dalam semuaNamaBuah. 
semuaNamaBuah harus sama dengan ["apel", "mangga", "sirsak", "semangka"]

let namaBuah1 = ['apel', 'mangga'];
let namaBuah2 = ['sirsak', 'semangka'];
let semuaNamaBuah;
 
Tulis kode kalian di bawah ini
*/
// let namaBuah1 = ['apel', 'mangga'];
// let namaBuah2 = ['sirsak', 'semangka'];
// let semuaNamaBuah = [...namaBuah1, ...namaBuah2];
// console.log(semuaNamaBuah);