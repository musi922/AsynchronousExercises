// function myFetch(URL) {
//     return new Promise((resolve, reject) => {
//         let xttp = new XMLHttpRequest()
//         xttp.open('GET',URL)
//         xttp.send()
//         // xttp.onload=()=>{
//         //     if (xttp.status===200) {
//         //         resolve(xttp.responseText);
                
//         //     }
//         //     else{
//         //         reject('there was an error in fetching')
//         //     }
//         // }
//         xttp.onreadystatechange=()=>{
//             if (xttp.readyState === 4) {
//                 if (xttp.status ===200) {
//                     resolve(xttp.responseText)  
                    
//                 }  
//                 else{
//                     reject('error')
//                 }
//             }  
//         }
//         xttp.onerror=()=>{
//             console.log('Networ error');
//         }
//     })
    
    
// }
// myFetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>console.log(error))

function myFetch(url) {
    return new Promise((resolve, reject) => {
        const xttp = new XMLHttpRequest()
    xttp.open('POST',url)
    xttp.setRequestHeader('content-Type','application/json')
    xttp.send(JSON.stringify({
        userId: 2,
        title: 'richardo rakitic'
        
    }))
    xttp.onload=()=>{
        if (xttp.status===201) {
            resolve(xttp.responseText)  
        }
        else('there was an error',xttp.status)
    }
    })
    
}
myFetch('https://jsonplaceholder.typicode.com/posts')
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))