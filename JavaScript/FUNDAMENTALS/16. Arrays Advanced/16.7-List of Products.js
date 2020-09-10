function orderByName(products){

    let names = products.sort((a, b) => a.localeCompare(b));
    for(let i = 0; i < names.length; i++){

        let output = `${i + 1}.${names[i]}`;
        console.log(output);
        
    }
    

}orderByName(["Potatoes", "Tomatoes", "Onions", "Apples"]);