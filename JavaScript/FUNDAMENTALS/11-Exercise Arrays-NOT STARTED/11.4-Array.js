function arrayRotate(array, rotator){

    let newArray = [];
    let index = Number(rotator) % Number(array.length);

    for (let i = index; i < array.length; i++){

        newArray.push(array[i]);
    }

    for ( let i = 0; i < index; i++){
        newArray.push(array[i]);
    }

    console.log(newArray.join(' '));
}
arrayRotate([32, 21, 61, 1], 4)