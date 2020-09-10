function sort(input) {
    let halfInput = input.length / 2;
    let newOrder = [];
    input.sort((a, b) => b - a);



    let endNumber = input.pop();
    newOrder.push(endNumber);



    console.log(endNumber);
    console.log(newOrder);


} sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);


// for (let i = input.length; i > halfInput; i--) {


//     let endNumber = input.pop(i);

//     if (i % 2 === 0) {
//         newOrder.push(input[i]);

//     }else{
//         newOrder.push(endNumber)
//     }


//     console.log(endNumber);
// }