function cinema(projection, rows, columns) {
    rows = Number(rows);
    columns = Number(columns);

    let premierePrice = 12.00;
    let normalPrice = 7.50;
    let discountPrice = 5.00;


    switch (projection) {
        case "Premiere":
            console.log((premierePrice * rows * columns).toFixed(2) + " leva");
            break;
        case "Normal":
            console.log((normalPrice * rows * columns).toFixed(2) + " leva");
            break;
        case"Discount":
         console.log((discountPrice * rows * columns).toFixed(2) + " leva") ;
            break;
    }


}

cinema("Normal",
"21",
"13")



