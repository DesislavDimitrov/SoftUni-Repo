function smallestTwo(numbers){

    let newOrder = numbers.sort((a, b) => a - b);
    
    smallest = newOrder.slice(0, 2);

    console.log(smallest.join(' '));
    
}smallestTwo([30, 15, 50, 5]);