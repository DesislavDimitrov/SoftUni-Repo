function solve(elements) {
    let result = [];
    let swapOperation = Math.ceil(elements.length / 2);
    let textResult = '';

    for (let i = 0; i < swapOperation; i++) {
        result[i] = elements[elements.length - 1 - i];
        result[elements.length - 1 - i] = result[i];
    }

   for(let element of result){
       textResult += element + ' ';
   }

   console.log(textResult);
}

solve(['a', 'b', 'c', 'd', 'e'])