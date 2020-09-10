let names = ['Pesho','Gosho','Kiril','Pesho'];

let uniqueNamesSet = new Set(names);

let uniqueNames = Array.from(uniqueNamesSet);

console.log(uniqueNames);


uniqueNamesSet.forEach(name => console.log(name));


// let uniqueNames = new Set();
// uniqueNames.add('Pesho');
// uniqueNames.add('Gosho');
// uniqueNames.add('Tisho');
// uniqueNames.add('Pesho');
