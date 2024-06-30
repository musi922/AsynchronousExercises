
const retry = (API,times)=>{
    return fetch(API)
    .then((response)=>{
        if (!response.ok) {
            throw new Error('there was an error during fetching')
        }
        
        return response.json()
    })
    .then((data)=>{
        console.log(data);
        let myid = document.getElementById('myid')
        myid.textContent = JSON.stringify(data)
    })
    .catch((error)=>{
        for (let i = 0; i < times; i++) {
            retry(API)
            console.log('there was an error',error);

        }
    })
}
retry('https://jsonplaceholder.typicode.com/todos/1', 3)