function order(product, qty) {
    
    qty = Number(qty);

    switch (product) {
        case "coffee":
            return(qty * 1.50).toFixed(2);
           
        case "coke":
            return(qty * 1.40).toFixed(2);
            
        case "water":
            return(qty * 1.00).toFixed(2);
            
        case "snacks":
            return(qty * 2.00).toFixed(2);
           
           
    }
}order("water",
    5);


    // function order(product, qty) {
    
    //     switch (product) {
    //         case "coffee":
    //             return qty * 1.50;
    //         case "coke":
    //             return qty * 1.40;
    //         case "water":
    //             return(qty * 1.00);
    //             return qty * 1.00;
    //         case "snacks":
    //             return qty * 2.00;
                
    //     }
    // }order("water",
    //     5);