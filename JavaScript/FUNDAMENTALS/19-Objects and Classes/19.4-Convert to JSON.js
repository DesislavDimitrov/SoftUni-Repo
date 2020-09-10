function convertJson(name, lastName, hairColor) {
    
let object = {name: name, lastName: lastName, hairColor: hairColor };

let output = JSON.stringify(object);

console.log(output);

}
convertJson('George',
'Jones',
'Brown');