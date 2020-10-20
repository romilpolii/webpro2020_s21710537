// const second = () => {
//     console.log('Second');
// }
// const first = () => {
//     console.log('First');
//     second(); //fungsi yang berjalan dengan waktu yang lama
//     console.log('The End');
// }
// first();

//const { reject } = require("async");



// const second = () => {
//     setTimeout(() =>{
//         console.log('Second');
//     }, 2000)
// }
// const first = () => {
//     console.log('First');
//     second(); 
//     console.log('The End');
// }
// first();


// const second = () => {
//     const num = 10;
//     setTimeout(() =>{
//         console.log('Second');
//         console.log(num);
//     }, 2000, num)
// }
// const first = () => {
//     console.log('First');
//     second(); 
//     console.log('The End');
// }
// first();


    //Callback
// const second = () => {
//     const num = 10;
//     setTimeout(() =>{
//         console.log('Async 1');
//         console.log(num);
//         setTimeout(() => {
//             console.log('Async 2');
//             setTimeout(() => {
//                 console.log('Async 3');
//             }, 2000);
//         }, 2000);
//     }, 2000, num)
// } // memiliki masalah yang disebut callback hell
// const first = () => {
//     console.log('First');
//     second(); 
//     console.log('The End');
// }
// first();


    //promise
// const getData = new Promise((resolve, reject) => {
//     //reject();
//     setTimeout(() => {
//         const error = false;
//         if (error) {
//             reject();
//         }else {
//             resolve();
//         }
//     }, 2000)
// })
// getData
//     .then(() => {console.log('Success')})
//     .catch(() => console.log('Error'))


    //menerima parameter
// const getData = new Promise((resolve, reject) => {
//     //reject();
//     setTimeout(() => {
//         const error = false;
//         if (error) {
//             reject('Success!!!');
//         }else {
//             resolve('Error!!!');
//         }
//     }, 2000)
// })
// getData
//     .then(success => console.log(success))
//     .catch(errror => console.log(error))

    //dibungkus dalam sebuah fungsi
// const getData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const error = false;
//             if (error) {
//                 reject('Success!!!');
//             }else {
//                 resolve('Error!!!');
//             }
//         }, 2000)
//     })
// }

// getData()
//     .then(success => console.log(success))
//     .catch(errror => console.log(error))


    // caining
// const getData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const error = false;
//             if (error) {
//                 reject('Success!!!');
//             }else {
//                 resolve(10);
//             }
//         }, 2000)
//     })
// }
// const getName = id =>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve(`ID: ${id} Success`)
//         }, 2000);
//     })
// }
// getData()
//     .then(id => getName(id))
//     .then (success => console.log(success))
//     .catch(errror => console.log(error))


        //Async & Await
const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (error) {
                reject('Error!!!');
            }else {
                resolve(10);
            }
        }, 2000)
    })
}
const getName = id =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(`ID: ${id} Success`)
        }, 2000);
    })
}

// const getNameById = async() => {
//     const id = await getData();
//     const success = await getName(id);
//     console.log (success);
// }
// getNameById ();

    //kalau error
// const getNameById = async () => {
//     try{
//         const id = await getData();
//         const success = await getName(id);
//         console.log (success);
//     } catch (error){
//         console.log(error)
//     }
// }
// getNameById ();

    //kalau ada return value
const getNameById = async () => {
    let id, success;
    try{
        const id = await getData();
        const success = await getName(id);
        //console.log (success);
    } catch (error){
        console.log(error)
    }
    return success;
}
getNameById().then(result => console.log(result));
//Output undifine