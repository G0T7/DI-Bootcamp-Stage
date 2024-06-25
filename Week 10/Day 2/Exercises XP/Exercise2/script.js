function delayPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
        }, 4000); // Resolves after 4 seconds
    });
}

// Usage
delayPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));
