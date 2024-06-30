// function promise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true;
//             const data = {name: 'richard', age:20}
//             if (success) {
//                 resolve(data)

// const { reject } = require("async");

// const { error } = require("console");

                
//             }
//             else{
//                 reject('we failed to grab some data budy')
//             }
//         }, 2000);
//     })
    
// }
// promise()
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))

// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const userData = { id: 1, name: "Alice" };
//             resolve(userData);
//         }, 1000);
//     });
// }

// function fetchUserPosts() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const posts = [{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }];
//             resolve(posts);
//         }, 500);
//     });
// }

// fetchUserData()
// .then((data)=>{console.log(data); return fetchUserPosts(data.id)})
// .then((data)=>console.log(data[0]))
// .catch((error)=>console.log(error))


// const promise1  = fetch('https://jsonplaceholder.typicode.com/todos/1');
// const promise2  = fetch('https://jsonplaceholder.typicode.com/todos/1');
// Promise.all([promise1,promise2])
// .then((responses)=>Promise.all(responses.map((response)=>response.json())))
// .then((data)=>{
//     console.log('here is data 1',data[0]);
//     console.log('here is data 2', data[1]);
    
// })
// .catch((error)=>{
//     console.log('there was an error',error);
// })

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('we got thi because of: ', response.statusText)
            
//         }
//         return response.json()
        
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));

//  fetch('https://jsonplaceholder.typicode.com/posts', {signal: AbortSignal.timeout(10)})
//     .then((resut)=>resut.json())
//     .then((data)=>console.log(data))
//     .catch(error => {
//         if (error.name === 'AbortError') {
//           console.log('Fetch request was aborted due to timeout');
//         } else {
//           console.error('Fetch error:', error);
//         }
//       });

// function promise() {
//     return new Promise((resolve, reject) => {
//         const shouldresolve = Math.random() > 0.5
//         setTimeout(() => {
//             if (shouldresolve) {
//                 resolve('Hello World')  
//             }
//             else{
//                 reject('Error occurred')
//             }  
//         }, 2000);
//     })
    
// }

// promise().then((response)=>console.log(response)).catch((error)=>console.log(error))
// let valu = 5
// function double(valu) {
    
//     return new Promise((resolve,reject)=>{
//             let result = valu*2
//             resolve(result)
//     })   
// }
// function increase(result) {
//     return new Promise((resolve,reject)=>{
//             let increased  = result + 10
//             resolve(increased)
    
        

//     })   
// }
// function multiply(increased) {
//     return new Promise((resolve,reject)=>{
//             let multiplication = increased * 3
//             resolve(multiplication)

//     })   
// }

// double(valu)
// .then((result)=>increase(result))
// .then((result)=>multiply(result))
// .then((result)=>{console.log(result); return console.log('everything is cool');})


const delays = [800, 1200, 1000];
function  fetchstimulator(url,delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url)
            .then((result=>{resolve(result.json())}))
            .catch((error)=>reject('there was error'))
        }, delay);
    
})
}
const fetch1 = fetchstimulator('https://jsonplaceholder.typicode.com/todos/1',delays[0])
const fetch2 = fetchstimulator('https://jsonplaceholder.typicode.com/todos/2',delays[1])
const fetch3 = fetchstimulator('https://jsonplaceholder.typicode.com/todos/3',delays[2])

Promise.all([fetch1,fetch2,fetch3])
.then((data)=> console.log(data))