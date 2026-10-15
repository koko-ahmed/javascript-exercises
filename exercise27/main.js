function myPromise() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Success! The Promise is completed.");
        }, 2000);

    });
}

myPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });