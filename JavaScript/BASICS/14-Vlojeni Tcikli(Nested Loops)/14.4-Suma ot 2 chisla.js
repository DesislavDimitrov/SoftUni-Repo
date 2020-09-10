function sumaOtChisla(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magickNum = Number(input[2]);

    let isMagic = false;
    let combination = 0;

    for (let i = startNum; i <= endNum; i++) {
        for(let j = startNum; j <= endNum; j++, combination++){
            if( i + j === magickNum){
                isMagic = true;

                console.log(`Combination N:${combination}`);
                console.log(`${i} + ${j} = ${magickNum}`);
                break;
            }
        }
        if(isMagic){
            break;
        }
    }
    if (!isMagic){
        console.log(`${combination} combinations - neither equals ${magickNum}`);
    }

}

sumaOtChisla(["23",
"24",
"20"]);