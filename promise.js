function walk(){
    return new Promise((resolve, reject) => {
        let walked = true;
        setTimeout(() => {
            if (walked) {
                resolve('i walked')   
            }
            else{
                reject('i dint walk')
            }
        }, 1000);
    })
}
function speak(){
    return new Promise((resolve, reject) => {
        let speaked = true;
        setTimeout(() => {
            if (speaked) {
                resolve('i speaked')
                
            }
            else{
                reject('i dint speak')
            }
            
        }, 2000);
    })
}
function eat(){
    return new Promise((resolve, reject) => {
        let eaten = false;
        setTimeout(() => {
            if (eaten) {
                resolve('i ate')    
            }
            else{
                reject('i dint eat')
            }
            
        }, 3000);
    })
}

async function doall() {
    try {
        let walks = await walk();
        console.log(walks);
        let speaks = await speak();
        console.log(speaks);
        let eats = await eat();
        console.log(eats);
        
    } catch (error) {
        console.log(error);
        
    }
    
}
doall()