let colors = ["red", "green", "blue"];

console.log("addinga after Using push");

colors.push("yellow");
console.log(colors);

console.log("removing first color Using shift");

colors.shift();
console.log(colors);
console.log("Adding first color Using unshift");

colors.unshift("black");
console.log(colors);

console.log("removing last color Using pop");

colors.pop();
console.log(colors);

console.log("showing the number of the all of the items");

console.log(colors.length);