function personalTitle(age, sex) {
    age = Number(age);

    if (age >= 16) {
        if (sex === "m") {
            console.log("Mr.");
        } else {
            console.log("Ms.");
        }
        
    } 
    if (age < 16) {
        if (sex === "m") {
            console.log("Master");
        } else {
            console.log("Miss")
        }
    } else {
        
    }     
    
}
personalTitle("13.5",
"m")