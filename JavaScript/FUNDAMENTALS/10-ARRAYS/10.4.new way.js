function reverse(elements){

    let arri = [];
    let arrj = [];
    let swapOperator = Math.floor(elements.length / 2);
   let string = "";

    for(let i = swapOperator; i >= 0; i--){
        let linei = elements[i]
        arri += linei + " ";
        
    }
    for( let j = elements.length - 1; j > swapOperator; j--){
        let linej = elements[j];
        arrj += linej + " ";
    }
    string = arrj + arri;

    //console.log(arri);
    // console.log(arrj);
    console.log(string);
}
reverse(['a', 'b', 'c', 'd', 'e']);