function greaterNumber(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (num1 > num2) {
        console.log(num1);        
    }else{
        console.log(num2);
    }

}
greaterNumber("5", "3");
greaterNumber("3", "5");
greaterNumber("10", "10");
greaterNumber("-5", "5");