// nested function
const global = 'global'

const parent =()=>{
    let parentVariable = 'PARENT'
    console.log(`parent variable is ${parentVariable
    }`);
    // .cannot be accessed inside parent
    // console.log(`child Variable is ${childVariable}`);
    console.log(`Global Property is ${global}`);

    const child = ()=>{
        let childVariable = 'CHILD'
        console.log(`child Variable is ${childVariable}`);
        // can be accessed inside the child
        console.log(`parent variable is ${parentVariable}`);
        console.log(`Global Property is ${global}`);
    }
    child()
}
parent()