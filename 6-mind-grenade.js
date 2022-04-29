//if we have a function inside of our module
//that we invoke,that code will run even if we do not assign it to a variable

const a = 2;
const b =43;

function add(){
    console.log(`the sum of two are: ${a + b}`);
}

add()