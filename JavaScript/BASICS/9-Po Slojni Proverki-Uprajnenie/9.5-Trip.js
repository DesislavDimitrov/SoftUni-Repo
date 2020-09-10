function name(budget, season) {

    budget = Number(budget);
    let location;
    let place;


    if (budget <= 100) {
        switch (season) {
            case "summer":
                budget = budget * 0.3;
                location = "Bulgaria";
                place = "Camp";
                break;
            case "winter":
                budget = budget * 0.7;
                location = "Bulgaria";
                place = "Hotel";
                break;

        }
    } else if (budget <= 1000) {
        switch (season) {
            case "summer":
                budget = budget * 0.4;
                location = "Balkans";
                place = "Camp";
                break;
            case "winter":
                budget = budget * 0.8;
                location = "Balkans";
                place = "Hotel";
                break;

        }

    } else if (budget > 1000) {
        budget = budget * 0.9;
        location = "Europe";
        place = "Hotel";
    }
    console.log(`Somewhere in ${location}`);
    console.log(`${place} - ${budget.toFixed(2)}`);
}

name("50", "summer");





