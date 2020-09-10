function grade(score){
    if(score >= 2.00 && score <= 2.99){
        console.log("Fail");
    }else if(score >= 3.00 && score <=3.49){
        console.log("Poor");
    }else if (score >= 3.50 && score <= 4.49){
        console.log("Good");
    }else if (score >= 4.50 && score <= 5.49){
        console.log("Very good");
    }else if (score >= 5.50 && score <= 6.00){
        console.log("Good");
    }

}grade(4.50)