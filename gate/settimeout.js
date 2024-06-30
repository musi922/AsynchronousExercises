// console.log("start");

// let time = setTimeout(()=>{
//     console.log('hello');
//     clearTimeout(time)
// },2000)



// console.log('end');

// //how this is handled in settimeout

// names = 'pirl';

// function ric() {
//     names: 'rich'
//     setTimeout(() => {
//         console.log(`${this.names} gang`);
        
//     }, 1000);
    
// }
// ric()

// //when given delay of 0 it still delays alittle period of time

// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout callback');
// }, 0);

// console.log('End');


// const fs = require('fs')
// console.log('start file');
// const data = fs.readFileSync('pirloboy',)




function greet(ms) {
    return new Promise((resolve=>setTimeout(resolve,ms)))   
}
async function asynfun() {
    console.log('first');
    await greet(2000)
    console.log('affter 2');
    
}
asynfun()