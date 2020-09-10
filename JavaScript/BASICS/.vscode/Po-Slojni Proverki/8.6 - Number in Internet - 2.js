function internetNumber(number) {

    number = Number(number)

    if (number !== 0 && number >= -100 && 100 >= number) {

        console.log("Yes");

    } else {
        console.log("No")
    }
}

internetNumber("0")