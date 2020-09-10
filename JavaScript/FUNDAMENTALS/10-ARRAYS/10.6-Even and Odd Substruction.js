function evenOddSubstruction(numbers) {
    
    let evensum = 0;
    let oddsum = 0;
    let total = 0;

    for (let parts of numbers) {
        if(parts % 2 === 0){
            evensum += parts;
        }else {
            oddsum += parts;
        }

       
    } 
    total = evensum - oddsum;
    console.log(total);
}
evenOddSubstruction([1,2,3,4,5,6]);