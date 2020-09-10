function smallestFunction(number1, number2, number3) {

    if (number1 < number2 && number1 < number3) {
        return number1;

    } else if (number2 < number1 && number2 < number3) {
        return number2;

    } else if (number3 < number1 && number3 < number2) {
        return number3;
    
    }

} 

smallestFunction(600, 342, 1230);