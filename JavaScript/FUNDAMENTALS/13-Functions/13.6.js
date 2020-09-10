function wrongResult(numberOne, numberTwo, numberThree) {
    let a = numberOne;
    let b = numberTwo;
    let c = numberThree;
    let result = '';

    if (a >= 0 && b >= 0 && c >= 0) {
        result = "Positive";
    } else if (a < 0 && b < 0 && c >= 0) {
        result = "Positive";
    } else if (a < 0 && b >= 0 && c < 0) {
        result = "Positive";
    } else if (a >= 0 && b < 0 && c < 0) {
        result = "Positive";
    }else if (a = 0 && b < 0 && c < 0) {
        result = "Positive";
    }else if (b = 0 && a < 0 && c < 0) {
        result = "Positive";
    }else if (c = 0 && a < 0 && b < 0) {
        result = "Positive";
    }else if (b <= 0 && a < 0 && c < 0) {
        result = "Positive";
    }else {
        result = "Negative"
    }
    console.log(result);
} wrongResult(
    -1,
    0,
    1)