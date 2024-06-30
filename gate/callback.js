// function hello(callback) {
//     setTimeout(() => {
//         console.log('hello richard');
//         callback() 
//     }, 2000);

const { log } = require("util");

    
// }
// function goodbye() {
//     console.log('bye rchard');
// }
// hello(goodbye);

// function sum(callback,x,y) {
//     let result = x + y;
//     callback(result)    
// }

// function displaysum(result) {
//     let ans = document.getElementById('myId');
//     ans.textContent = result;
//     console.log(result);
    
// }

// sum(displaysum,1,2)


//error-first callback
// function fetchData(callback) {
//     setTimeout(() => {
//         const error = Math.random()>0.5 ? new Error('something is not working bussy'):null;
//         const data = { name : 'richard', age: 20}
//         callback(error,data)     
//     }, 3000);
    
// }
// function displaydata(error,data) {
//     if (error) {
//         console.log('Error in fetching data', error.message);
        
//     }
//     else{
//         // let ans = document.getElementById('myId');
//         // ans.textContent = ``;
//         console.log('here is the data: ', `the name is ${data.name} and age is : ${data.age}`);
//     }
    
// }
// fetchData(displaydata)

//converting callback into promise
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { name: "Bob", age: 30 };
//         callback(data);
//     }, 2000);
// }

// function promise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { name: "Bob", age: 30 };
//             resolve(data)
            
//         }, 2000);
//     })
    
// }
// promise()
// .then((result)=>console.log(result))

//question on gpt of handling error using err0r-first callback

// function fetchData(callback) {
//     setTimeout(() => {
//         const error = Math.random() > 0.5 ? new Error('something went wrong'):null;
//         const data = { name: "Bob", age: 30 };
//         callback(error,data)

        
//     }, 2000);
    
// }
// function displaydata(error,data){

//     if (error) {
//         console.log('we have got an error buddy',error.message); 
//     }
//     else{
//         console.log('here is the data buddy', data);
//     }
    
// }

// fetchData(displaydata);


//callback chaining
// function task1(callback) {
//     setTimeout(() => {
//         console.log('this is task 1');
//         callback()
        
//     }, 1000);
    
// }
// function task2(callback) {
//     setTimeout(() => {
//         console.log('this is task 2');
//         callback()
        
//     }, 700);
    
// }
// function task3(callback) {
//     setTimeout(() => {
//         console.log('this is task 3');
//         callback()
        
//     }, 200);
    
// }
// task1(()=>{
//     task2(()=>task3(()=>{
//         console.log('its done buddy');
//     }))
// })


// handling callback in parallel

function fetchData1(callback) {
    setTimeout(() => {
        const data = { name: "David", age: 32 };
        callback(data);
    }, 1000);
}

function fetchData2(callback) {
    setTimeout(() => {
        const data = { name: "Emily", age: 29 };
        callback(data);
    }, 500);
}

// Executing in parallel
fetchData1(data1 => {
    console.log("Data from fetchData1:", data1);
});

fetchData2(data2 => {
    console.log("Data from fetchData2:", data2);
});
