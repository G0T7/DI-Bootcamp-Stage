//Analyze the code provided below - what will be the outcome?

let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

// This function does not handle errors. See warning below!
let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds().then((message) => console.log(message));
    resolveAfter1Second().then((message) => console.log(message));
}

setTimeout(parallelPromise, 13000)
//Output:
// After 13 seconds
//==PARALLEL with Promise.then==
//starting slow promise
//starting fast promise
// After 1 second (since fast promise resolves faster)
//fast promise is done
//fast
// After another 1 second (since slow promise takes 2 seconds to resolve)
//slow promise is done
//slow
