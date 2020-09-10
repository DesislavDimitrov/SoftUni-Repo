function invalideNumber(number) {
    number = Number(number);

    if (number === 0 || number >= 100 && number <= 200) {
        console.log();
    } else {
        console.log("invalid");
    }
}
invalideNumber("150");