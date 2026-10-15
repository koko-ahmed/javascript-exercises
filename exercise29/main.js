function getData() {
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

getData();

console.log("I can run while JSON is loading");