
function first() {
    console.log('First');
  }

  function second() {
    first();
    console.log('Second');
  }
  
  function third() {
    second();
    console.log('Third');
  }
  
  third();
  