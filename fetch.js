// fetch(url)
// .then(x=>x.text())
// .then(y=>console.log(y))

// //using async and await

// async function fetchData() {
//     const myObject = await fetch(url)
//     const myText  = await myObject.text();
//     console.log(myText);
    
// }


// fetch('https://jsonplaceholder.typicode.com/post/1')
// .then((response)=>{
//     if (!response.ok) {
//         throw new Error('Network response error',response.statusText)
        
//     }
//     return response.json()
// })
// .then(data=>console.log(data))
// .catch(error=>console.log(error))

//POST mETHOD

// const newPost = {
//     title: 'richard',
//     body: 'pirlo',
//     userId: 2
// }

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newPost)
// })
// .then((response)=>{
//     if (!response.ok) {
//         throw new Error('there was these error',response.statusText)
        
//     }
//     return 
// })
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))


//authentication

// const newPost = {
//         title: 'richard',
//         body: 'pirlo',
//         userId: 2
//     }
//     const apikey = "ahdjd#hf"
    
//     fetch('https://jsonplaceholder.typicode.com/posts',{
//         method: 'POST',
//         headers: {
//             authorizatio:`Bearer ${apikey}` 
//         }
//     })
//     .then((response)=>{
//         if (!response.ok) {
//             throw new Error('there was these error',response.statusText)
            
//         }
//         return 
//     })
//     .then((data)=>console.log(data))
//     .catch((error)=>console.log(error))


//two fetching not using promise.all

let apiurl1 = 'https://jsonplaceholder.typicode.com/posts/1'
let apiurl2 = 'https://jsonplaceholder.typicode.com/posts/2'

fetch(apiurl1)
.then((response)=>{
    if (!response.ok) {
        throw new Error('we cauht this:', response.statusText)
        
    }
    return response.json()
})
.then(data=>{console.log('data from api2',data);
    return fetch(apiurl2)
})
.then((response)=>{
    if (!response.ok) {
        throw new Error('we cauht this:', response.statusText)
        
    }
    return response.json()
})
.then(data=>{console.log('data from api2',data);})
.catch((eror)=>console.log(eror))






    
