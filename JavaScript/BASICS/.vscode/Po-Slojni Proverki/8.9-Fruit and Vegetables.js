function fruitVegi(product) {
    let isfruit = product === "banana" || product === "apple" || product === "kiwi" || product === "cherry" || product === "lemon" || product === "grapes";

    if (isfruit) {

        switch (product) {
            case "banana":
            case "apple":
            case "kiwi":
            case "cherry":
            case "lemon":
            case "grapes":
                console.log("fruit");
                break;
            default:
                console.log("unknown");
                break;

        }
    } else {
        switch (product) {
            case "tomato":
            case "cucumber":
            case "pepper":
            case "carrot":
                console.log("vegetable");
                break;

            default:
                console.log("unknown");
                break;
        }
    }
}
fruitVegi("tomatodd");