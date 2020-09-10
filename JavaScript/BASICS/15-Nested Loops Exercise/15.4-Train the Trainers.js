function trainTheTrainers(input) {
    let n = Number(input[0]);
    // n=броя на хората в журито.
    let index = 1;
    let name = input[index];
    let countNames = 0;

    let totalAvgGrade = 0;

    while (name != "Finish") {
        countNames++;
        let avgGrade = 0;


        for (let i = 0; i < n; i++) {
            index++;
            let grade = Number(input[index]);
            avgGrade += grade;

        }
        avgGrade /= n;
        console.log(`${name} - ${avgGrade.toFixed(2)}.`);

        index++;
        name = input[index];
        totalAvgGrade += avgGrade;
    }
    
    console.log(`Student's final assessment is ${(totalAvgGrade / countNames).toFixed(2)}.`);

}

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"]);