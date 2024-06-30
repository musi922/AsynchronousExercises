// //create a function myFetch
// //return promise
// //create a variable to hold xmlhttp request

// function myFetch(){
//     return new Promise((resolve,reject)=>{
//         let xttp = new XMLHttpRequest();
//         xttp.open('GET','https://jsonplaceholder.typicode.com/users')

//         xttp.onload=()=>{
//             if(xttp.status===200){
//                 resolve(xttp.responseText)
//             }
//             else{
//                 reject('error',error.status)
//             }

//         }
//         xttp.send()
//     })

// }

// myFetch()
// .then(data=>{
//     console.log('the fetched data:',data)
// }
// )
// .catch(error=>console.log('we are unable to fetch',error))

//Promise.all(data.map(response=>console.log(response))

function userTodos() {
  const users = fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json());
  const todos = fetch("https://jsonplaceholder.typicode.com/todos").then((response) => response.json());

  Promise.all([todos, users])
    .then((data) => {
      return data[1].map((user) => ({
        ...user,
        todos: data[0].filter((todo) => todo.userId === user.id),
      }));
    })
    .then((data) => console.log(data))
    .catch((error) => console.log("we got error", error));
}

userTodos()