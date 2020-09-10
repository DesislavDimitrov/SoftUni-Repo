function mergeArray(arr1, arr2) {
    let newArray = [];

    for(let i = 0; i < arr1.length; i++){
        if(i % 2 === 0){
            newArray[i] = Number(arr1[i]) + Number(arr2[i]);
        } else{
            newArray[i] = `${arr1[i]}${arr2[i]}`;
        }
    }
    let output = newArray.join(' - ');

    console.log(output);

}
mergeArray(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);