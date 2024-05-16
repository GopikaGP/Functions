// call back functions

function greet(name,callback){
    console.log`Hai ${name}`;
    callback()
}
function callme(){
    console.log(`i am a call back functions`);
}
greet('peter',callme)

// eg:2
setTimeout(() => {
    console.log('hello');
}, 5000);




