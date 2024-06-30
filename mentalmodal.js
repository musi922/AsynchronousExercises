function fetchData(url) {
    const controller = new AbortController()
    const signal = controller.signal

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, 10);

    fetch(url, { signal })
        .then((response) => {
            clearTimeout(timeoutId)
            if (!response.ok) {
                throw new Error('This codes failed to fetch')
            }
            return response.json()
        })
        .then((val) => console.log(val))
        .catch((error) => console.log(error.message))
}
fetchData('https://jsonplaceholder.typicode.com/todos/1')
