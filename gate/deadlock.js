const resourceA = { id: 'A' };
const resourceB = { id: 'B' };

function process1() {
  console.log('Process 1: Waiting for Resource A');
  setTimeout(() => {
    console.log('Process 1: Acquiring Resource A');
    setTimeout(() => {
      console.log('Process 1: Waiting for Resource B');
      setTimeout(() => {
        console.log('Process 1: Acquiring Resource B');
        console.log('Process 1: Completed');
      }, 1000);
    }, 1000);
  }, 9000);
}

function process2() {
  console.log('Process 2: Waiting for Resource B');
 setTimeout(() => {
    console.log('wait me please');
    setTimeout(()=>{
        console.log('wait me again please');
        setTimeout(() => {
            console.log('wait me aga again  please');
        }, 2000);
    },2000)
 }, 8000);



}
process2();