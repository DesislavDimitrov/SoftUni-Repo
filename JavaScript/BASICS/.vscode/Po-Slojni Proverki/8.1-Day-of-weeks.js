function dayOfWeek(day) {
    day = Number(day);
    	switch (day) {
            case 1 :
                console.log("Monday"); 
                break;
            case 2 :
                console.log("Tuesday");
                break;
            case 3 :
                console.log("Wednesday");
                break;
            case 4 :
                console.log("Thursday");
                break;
            case 5 :
                console.log("Friday");
                break;

            default:
                console.log("Error");
                break;
        }
}
dayOfWeek("-2")