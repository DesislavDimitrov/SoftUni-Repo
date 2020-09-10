function equalElements(arr) {
    let sequence = [];
    let counter = 0;

    for (let index = counter; index < arr.length; index++) {
        let element = arr[index];
        let currentSequence = [element]


        for (let i = index + 1; i < arr.length; i++) {
            let nextElement = arr[i];
            counter++;

            if (element === nextElement) {
                currentSequence.push(nextElement);
                index = i
            } else {
                break;
            }
        }
        if (currentSequence.length > sequence.length) {
            sequence = currentSequence;
        }
    }
    // for (let j = i + 1; j < arr.length; j++) {

    // }

    console.log(sequence.join(' '));
} equalElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])