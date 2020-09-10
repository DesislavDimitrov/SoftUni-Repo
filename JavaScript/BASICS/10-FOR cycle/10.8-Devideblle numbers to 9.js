function devideOn9(n, m) {
    n = Number(n);
    m = Number(m);

    let sum = 0;


    for (let i = n; i <= m; i++) {
        if (i % 9 === 0) {
            sum += i;
        }

    }
    console.log(`The sum: ${sum}`);
    
    for (let i = n; i <= m; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }

    }
}




devideOn9("100", "200");