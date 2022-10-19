const animals = ["🐷", "🐮", "🐔"];

// Array.push()
// Adds one or more elements to the end of an array.
animals.push("🐴", "🐮");
console.log(animals);

//==============================

// Array.from()
// Creates a new array from an array-like or iterable object.
const wild = "🐻🐯🦁";
console.log(wild.length);
const tamed = Array.from(wild);
console.log(tamed);

//==============================

// Array.concat()
// Merges two or more arrays into a single new one.
const dogs = ["🐶", "🐶"];
const cats = ["🐱", "🐱", "🐱"];
const pets = dogs.concat(cats);
console.log(pets);

//==============================

// Array.every()
// Checks if all elements of an array pass the test.
const visitors = ["🧑", "👽", "🧑", "🧑", "🤖"];
const isHuman = (e) => e === "🧑";
const onlyHumans = visitors.every(isHuman);
console.log(onlyHumans);

//==============================

//Array.fill()
//Replaces the elements of an array from start to end index with a given value.
let seeds = ["🌱", "🌱", "🌱", "🌱", "🌱"];
seeds.fill("🌳", 1, 4);
console.log(seeds);

//==============================

// Array.filter()
// Creates a new array containing all elements passing the test.
const guests = ["👩👨", "👩👩", "👨", "👩", "👨👨"];
const singles = guests.filter((g) => g.length / 2 === 1); // *
console.log(singles);

//==============================

// Array.flat()
// Creates a new array containing all elements from all sub-arrays up to a given depth.
const savings = ["💵", ["💵", "💵"], ["💵", "💵"], [[["💰"]]]];
const loot = savings.flat(3);
console.log(loot);

//==============================

// Array.includes()
// Checks if an array contains a specific element.
const food = ["🥦", "🥬", "🍅", "🥒", "🍩", "🥕"];
const caught = food.includes("🍩");
console.log(caught);

//==============================

// Array.join()
// Concatenates all array elements to one single string, using an optional separator.
const devices = ["💻", "🖥️", "🖥️", "💻", "🖨️"];
const network = devices.join("〰️");
console.log(network);

//==============================

// Array.map()
// Calls a function on each array element and returns the result as new array.
const hungryMonkeys = ["🐒", "🦍", "🦧"];
const feededMonkeys = hungryMonkeys.map((m) => m + "🍌");
console.log(feededMonkeys);

//==============================

// Array.reverse()
// Reverses the order of elements in an array.
let rabbitWins = ["🐇", "🦔"];
const hedgehogWins = rabbitWins.reverse();
console.log(hedgehogWins);

//==============================

// Array.slice()
// Creates a new array from copying a portion of an array defined by start and end index.
const solutionsOfClassmates = ["📃", "📑", "📄", "📝"];
const myOwnSolutionReally = solutionsOfClassmates.slice(2, 3);
console.log(myOwnSolutionReally);

//==============================

// Array.some()
// Tests if at least one element of an array passes the test.
const participants = ["🔇", "🔇", "🔊", "🔇", "🔊"];
const isLoud = (p) => p === "🔊";
const troubles = participants.some(isLoud);
console.log(troubles);

//==============================

// Array.sort()
// Sorts all elements of an array.
let books = ["📕", "📗", "📕", "📒", "📗", "📒"];
books.sort();
console.log(books);

//==============================

// Array.splice()
// Removes, replaces or adds elements to an array.
let weather = ["☁️", "🌧️", "☁️"];
weather.splice(1, 2, "☀️");
console.log(weather);

//==============================

// Array.unshift()
// Adds one or more elements to the beginning of an array.
let train = ["🚃", "🚃", "🚃", "🚃"];
train.unshift("🚂");
console.log(train);

//==============================
