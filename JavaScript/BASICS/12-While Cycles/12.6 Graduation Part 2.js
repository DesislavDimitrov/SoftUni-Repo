function graduation(input) {

    let i = 0;
    let name = input[i++];
    let year = 1;
    let yearFaild = 0;
    let total = 0;
    let grade = Number(input[i++]);
    while (year <= 12) {
    

        if (grade < 4) {
            yearFaild++;

            if (yearFaild === 2) {
                break;
            }
        } else {
            total += grade;
            year++;
        }
        grade = Number(input[i++]);
        
    }

    if (yearFaild < 2) {
        let avgGread = (total / 12).toFixed(2);
        console.log(`${name} graduated. Average grade: ${avgGread}`);
    } else {
        console.log(`${name} has been excluded at ${year} grade`);
    }

}

graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"]);