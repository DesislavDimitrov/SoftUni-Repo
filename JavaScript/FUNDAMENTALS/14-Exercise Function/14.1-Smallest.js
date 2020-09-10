function smallestNumber(numberOne, numberTwo, numberThree){

    if (numberOne < numberTwo && numberOne < numberThree){
       // return numberOne;
        console.log(numberOne);
    }else if(numberTwo < numberOne && numberTwo < numberThree){
        //return numberTwo;
        console.log(numberTwo);
    }else if(numberThree < numberOne && numberThree < numberTwo){
        //return numberThree;
        console.log(numberThree);
    }

}smallestNumber(
    2,
    5,
    3)