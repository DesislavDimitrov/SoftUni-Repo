function clothChanger(degree, dayTime) {
    degree = Number(degree);
    let outfit;
    let shoes;
    

    if (10 <= degree && degree <= 18) {
        if (dayTime == "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (dayTime == "Afternoon" && dayTime == "Evening" ) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } 
            console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
        
    }
    if (18 < degree && degree <= 24) {
        if (dayTime == "Morning" && dayTime == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (dayTime == "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } 
            console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
        
    }
    if (degree >= 24) {
        if (dayTime == "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (dayTime == "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (dayTime == "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
            console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
}
}
clothChanger("28","Evening");
