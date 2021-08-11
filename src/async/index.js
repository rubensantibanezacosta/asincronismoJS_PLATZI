const doSomethingAsync= ()=>{
    return new Promise((resolve,reject)=>{
        (true)
            ?setTimeout(()=>{resolve("Do something Async"),3000})
            :reject(new Error("ERROR"))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}



console.log("Before");
doSomething();
console.log("after");

const anotherfunction = async () =>{
    try{
        const something= await doSomethingAsync();
        console.log(something);
    }
    catch(error){
        console.error(error)
    }
}

console.log("Before 1");
anotherfunction();
console.log("after 1");