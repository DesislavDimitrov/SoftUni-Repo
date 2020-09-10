function solvation(input) {

    let sum = 0;
    let i = input[0];
    let n = Number(i);
    for (let x1 = 0; x1 <= n; x1++) {
        for (let x2 = 0; x2 <= n; x2++) {
            for (let x3 = 0; x3 <= n; x3++) {
                let a = x1 + x2 + x3;

                if (a === n) {
                    sum++;

                }
                

            }
        }
    }
    console.log(sum);
}
solvation(["25", "26"]);
