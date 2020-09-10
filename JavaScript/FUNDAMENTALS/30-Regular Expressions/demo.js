// let pattern = new RegExp('[A-Z][a-z]+', 'g');

// let text = 'Lorem Ipsum is simply dummy text Kiko'

// let pattern = /(?<firstLetter>[A-Z])[a-z]+/g;

// let result =text.match(pattern)
// console.log(result);
// console.log(result[0]);
// console.log(result[1]);
// console.log(result.groups);



// let result = pattern.exec(text);
// while (result) {
//     console.log(result.groups.firstLetter);
//     console.log(result[0]);
//     result = pattern.exec(text);
// }


// let matches = text.matchAll(pattern);

// for (const match of matches) {
//     console.log(match);
// }

let text = "name=Machine Learning&months=2&module=AI";
let pattern = /name=(?<name>[A-Za-z-\d\s]+)&months=(?<months>[\d]+)&module=(?<module>[A-Z]+)/;
let simon = text.match(pattern);

simon.groups.name

console.log(simon.groups.months);

