function komisionna(city, sales) {
    sales = Number(sales);

    let isSales1 = (0 <= sales && sales <= 500);
    let isSales2 = (500 <= sales && sales <= 1000);
    let isSales3 = (1000 <= sales && sales <= 10000);
    let isSales4 = (sales > 10000);

    if (isSales1) {
        switch (city) {
            case "Sofia":
                console.log((sales * 0.05).toFixed(2));
                break;
            case "Varna":
                console.log((sales * 0.045).toFixed(2));
                break;
            case "Plovdiv":
                console.log((sales * 0.055).toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
    } else if (isSales2) {
        switch (city) {
            case "Sofia":
                console.log((sales * 0.07).toFixed(2));
                break;
            case "Varna":
                console.log((sales * 0.075).toFixed(2));
                break;
            case "Plovdiv":
                console.log((sales * 0.08).toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
    } else if (isSales3) {
        switch (city) {
            case "Sofia":
                console.log((sales * 0.08).toFixed(2));
                break;
            case "Varna":
                console.log((sales * 0.1).toFixed(2));
                break;
            case "Plovdiv":
                console.log((sales * 0.12).toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
    } else if (isSales4) {
        switch (city) {
            case "Sofia":
                console.log((sales * 0.12).toFixed(2));
                break;
            case "Varna":
                console.log((sales * 0.13).toFixed(2));
                break;
            case "Plovdiv":
                console.log((sales * 0.145).toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
    } else {
        console.log("error");
    }      
   
}
komisionna("Varna",
"-3874.50")