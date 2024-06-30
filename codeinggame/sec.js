// function job(callback1) {
//     setTimeout(()=>{
//         console.log('you called 1');
//         callback1()
//     },2000)
    

// }
// function job2(callback2) {
//     let counter = 0

//     let timer = setInterval(()=>{
//         console.log('you called 2');
//         counter++

//         if(counter>=3){
//             clearInterval(timer)
//         }

 
//     },1000)
    
// }
// console.log(job(job2));

//using promise

function job(callback1) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('you called 1');
            
        },2000)
    })
    

}
// function job2() {
//     return new Promise((resolve, reject) => {
//         let counter = 0

//     let timer = setInterval(()=>{
//         console.log('you called 2');
//         counter++

//         if(counter>=3){
//             clearInterval(timer)
//         }

 
//     },1000)
//     })
    
// }
// job().then(val=>{console.log(val); return job2()})
// .then(val=>console.log(val));

//using async

