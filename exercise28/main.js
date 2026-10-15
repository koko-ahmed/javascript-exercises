function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success! The Promise is completed.");
        }, 2000);
    });
}

async function runPromise() {
    try {
        const message = await myPromise();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

runPromise();