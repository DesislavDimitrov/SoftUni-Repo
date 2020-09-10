function arrayRotation(arr, rotator){

    let array = [];
    let index = Number(rotator) % Number(arr.length);

    for (let i = index; i < arr.length; i++){
        array.push(arr[i]);
    }
    for (let i = 0; i < index; i++){
        array.push(arr[i]);
    }

    console.log(array.join(' '))
}
arrayRotation([51, 47, 32, 61, 21], 2);