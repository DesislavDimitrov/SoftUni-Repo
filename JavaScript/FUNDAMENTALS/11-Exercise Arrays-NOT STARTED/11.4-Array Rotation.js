function arrayRotate(array, rotator) {

    let newArray = [];
    let index = Number(rotator) % array.length;

    for (let i = index; i < array.length; i++) {
        newArray.push(array[i]);
    }

    for( let i = 0; i < index; i++ ){
        newArray.push(array[i]);
    }
    console.log(newArray.join(" "));



} arrayRotate([2, 4, 15, 31], 5);