function order(product, quantity){
let qty =  Number(quantity);

    if(product === 'coffee'){
        console.log((qty * 1.50).toFixed(2));
    }else if(product === 'coke'){
        console.log((qty * 1.40).toFixed(2));
    }else if(product === 'water'){
        console.log((qty * 1.00).toFixed(2));
    }else if(product === 'snacks'){
        console.log((qty * 2.00).toFixed(2));
    }
}order('coffee',2)

