
const fs = require("fs")

const person = {
    name: "Rachael",
    age: 27,
    favColour: "black"
};

const personJson = JSON.stringify(person);

console.log(person)
console.log(personJson)

fs.writeFileSync("json_demo/person.json", personJson)

const dataBuffer = fs.readFileSync("json_demo/person.json");
console.log(dataBuffer);

const dataJson = dataBuffer.toString();

const data = JSON.parse(dataJson);

console.log(data);