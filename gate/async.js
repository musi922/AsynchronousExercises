async function fetchData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/poshht');
    if (!response.ok) {

        throw new Error('faied to fetch',response.statusText)
    }
    let data = await response.json();
    return data;
}


fetchData().then(data => {
    console.log(data);
}).catch(error => {
    console.error('Error fetching data:', error);
});