function changecolor() {
    let colors = ["red", "green", "blue"]
    setInterval(() => {
        let random = Math.floor(Math.random()* colors.length)
        document.body.style.background = colors[random]
        
    }, 1000);
    
}
changecolor()