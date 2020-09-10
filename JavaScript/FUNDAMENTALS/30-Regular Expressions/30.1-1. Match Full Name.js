function solve(input) {
 
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let validName = [];

    let results = pattern.exec(input);

while (results) {
    validName.push(results[0]);

    results = pattern.exec(input);

}
    console.log(validName.join(' '));
}
solve('Ivan Ivanov, ivan ivanov, Test Test, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov, Test Testov');