function arrayCompare(in1, in2) {
    let sumIn1 = 0;
    let isTrue = true;

    for (let i = 0; i < in1.length; i++) {
        if (in1[i] !== in2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            isTrue = false;
            break
        }
    }

    for (let i = 0; i < in1.length; i++) {

        let inMembers = Number(in1[i]);
        sumIn1 += inMembers;

    }
    if (isTrue) {
        console.log(`Arrays are identical. Sum: ${sumIn1}`);
    }
    // for (let i = 0; i < in1.length; i++) {
    //     if (isTrue) {
    //         let inMembers = Number(in1[i]);
    //         sumIn1 += inMembers;

    //     }
    //     console.log(`Arrays are identical. Sum: ${sumIn1}`);

    // }

} arrayCompare(['10', '20', '40'], ['10', '20', '30'])