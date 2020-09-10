function arrayRot(array, rotator){

    let newArray = [];
    let index = Number(rotator) % Number(array.length);

    for (let i = index; i = array.length; i++){

        newArray.push(array[i]);
    }
     for(let i = 0; i < index; i++){
         newArray.push(array[i])
     }

     console.log(newArray.join(' '));

}arrayRot([51, 47, 32, 61, 21], 2);