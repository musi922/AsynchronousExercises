
const fetch1 = fetchData('https://jsonplaceholder.typicode.com/todos/1')
const fetch2 = fetchData('https://jsonplaceholder.typicode.com/todos/2')
const fetch3 = fetchData('https://jsonplaceholder.typicode.com/todos/3')
function fetchData(url) {
    const controller = new AbortController()
    let button = document.getElementById('btn')
button.addEventListener('click',()=>{
    controller.abort()
})
    return fetch(url,{signal: controller.signal})
    .then((response)=>response.json())
    .catch((error)=>{console.log('there was an error occured');})
       
}

Promise.all([fetch1,fetch2,fetch3])
.then((data)=>{
    let myid = document.getElementById('myid')
    myid.textContent = data
    console.log(data);
})
fetchData()


