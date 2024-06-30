let counter = 0;

let timer = setInterval(function() {
    console.log(counter += 1);
    
    if (counter >= 5) {
        clearInterval(timer);
    }
}, 1000);

