// Blocking version
function blockingFunction() {
    const start = Date.now();

    while (Date.now() - start < 2000) {
        // Wait for 2 seconds
    }

    return "Blocking function finished";
}

console.log(blockingFunction());


// Non-blocking version
function nonBlockingFunction() {
    setTimeout(() => {
        console.log("Non-blocking function finished");
    }, 2000);
}

nonBlockingFunction();