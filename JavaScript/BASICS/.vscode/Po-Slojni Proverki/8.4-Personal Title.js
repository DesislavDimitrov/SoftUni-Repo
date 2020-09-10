function titleAge(age, sex) {
    age = Number(age);

    if (age >= 16) {
        switch (sex) {
            case "m":
                console.log("Mr.");
                break;
            
            case "f":
                console.log("Ms.");
                break;
        
            default:
                
                break;
        }
    }   
    if (age < 16) {
        switch (sex) {
            case "m":
                console.log("Master");
                break;
            case "f":
                console.log("Miss");
                break;
        
            default:
                break;
        }
    }
        
}

titleAge("13.5",
"m")