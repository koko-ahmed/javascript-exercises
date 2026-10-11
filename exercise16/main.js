console.log("Properties and values for each person");

const person1 = {
    name: "Alice",
    age: 25,
    city: "Wonderland"
};

for (const key in person1) {
    console.log(key + ": " + person1[key]);
}

console.log("---");

const person2 = {
    name: "Johne",
    age: 25,
    city: "SomaliLand"
};

for (const value of Object.values(person2)) {
    console.log(value);
}

console.log("---");
const person3 = {
    name: "Faarax",
    age: 25,
    city: "SomaliLand"
};

for (const value of Object.values(person3)) {
    console.log(value);
}

console.log("---");