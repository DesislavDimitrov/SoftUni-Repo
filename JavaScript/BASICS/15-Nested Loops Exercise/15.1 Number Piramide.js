function numberPiramide(input) {
    let n = Number(input[0]);

    let count = 1;
    let endCriteria = false;


    for (let rows = 1; rows <= n; rows++) {
        let output = "";
        for (let rowNumbers = 1; rowNumbers <= rows; rowNumbers++) {

            output += count + " ";
            if (count === n) {
                endCriteria = true;
                break;
            }
            count++;

        }
        console.log(output);

        if (endCriteria) {
            break;
        }
    }

}
numberPiramide(["6"])