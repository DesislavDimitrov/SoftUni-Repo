function grade(score) {

    
    
    if (score < 3) {
        
        return "Fail";
    } else if (score < 3.50) {
        return "Poor";
    } else if (score < 4.5) {
        return "Good";

    } else if (score < 5.50) {
        return "Very good";
    } else if (score <= 6.00) {
        return "Excellent";
    }
   

}
grade(3.33);