function fetchcountrydetais(countryName) {
    return fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response)=>{
        if (!response.ok) {
            throw new Error(response.status)   
        }
        return response.json();
    })
}
function fetchweatherdetais() {
    return fetch('https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true.')
    .then((response)=>{
        if (!response.ok) {
            throw new Error(response.status)   
        }
        return response.json();
    })
}
fetchcountrydetais('kenya')
.then((data)=>{
    console.log(data[0].capital[0]);
    console.log(data[0].latlng[0]);
    console.log(data[0].latlng[1]);
})
