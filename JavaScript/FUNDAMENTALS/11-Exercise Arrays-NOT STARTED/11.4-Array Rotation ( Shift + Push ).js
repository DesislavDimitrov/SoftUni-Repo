function arrayRot(arr, rot){

    let newArray = [];
    let element = "";


    for (let i = 0; i < rot; i++){

        element = arr.shift()
        arr.push(element)
    }
    
    console.log(arr.join(' '));

}arrayRot([2, 4, 15, 31], 5);