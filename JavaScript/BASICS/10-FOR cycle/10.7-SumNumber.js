function sumNumber(realNum) {
    let sum = 0;
    
    for (let i = 0; i < realNum.length; i++) {
        
        sum += Number(realNum[i]);
        
    }
    console.log(sum);
}
sumNumber("1234");