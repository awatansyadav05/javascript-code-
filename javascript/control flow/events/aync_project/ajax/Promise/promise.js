
// 1 Promise
const promiseOne = new Promise(function(resolve, reject){
    setTimeout (function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})
promiseOne.then (function(){
    console.log('promise consumed');
})
//2 promise
new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();

    }, 2000)
}).then(function(){
    console.log('Async 2 is resloved');
})

// 3 promise
const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Avii", email :"avii@gmail.com"})
    }, 4000)
})
PromiseThree.then(function(username){
    console.log(username);
})

// 4 promise

const promiseFour = new Promise (function(resolve,reject){
    setTimeout(function(){
    let error= false
    if (!error) {
        resolve({username: "aviiii", password: 1233}
      )
    }
    else{
        reject('ERROR: Something went wrong')
    }
    }, 5000)
})

promiseFour
.then((user)=> {
    console.log(user);
    return user.username
})
.finally(()=>{
    console.log("The promise is either resloved or reject");
})
.then((username)=>{
    console.log(username);
})
 .catch((error)=>{
    console.log(error);
})

//promise 5

const promiseFive = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        let error =true
        if (!error){
            resolve({username: "sam", password: "AviiHeart"})
        }
        else{
            reject('error: JS went wrong')
        }
    }, 6000)
})

async function consumePromiseFive(){
 try {
    const response = await promiseFive
    console.log(response);
    
 } catch (error) {
    console.log(error);
 }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E:', error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => {
    console.log(error);
})



