function neadedRent(budget, season, fishermans) {

    budget = Number(budget);
    fishermans = Number(fishermans);

    boatRent = 0;

    switch (season) {
        case "Spring":
            boatRent = 3000;
            if (fishermans <= 6) {
                boatRent = boatRent * 0.9;
                if (fishermans % 2 === 0) {
                    boatRent = boatRent * 0.95;
                }
            } else if (fishermans >= 7 && fishermans <= 11) {
                boatRent = boatRent * 0.85;
                if (fishermans % 2 === 0) {
                    boatRent = boatRent * 0.95;
                }
            } else if (fishermans >= 12) {
                boatRent = boatRent * 0.75;
                if (fishermans % 2 === 0) {
                    boatRent = boatRent * 0.95;
                }
            }
            break;
        case "Summer":
            boatRent = 4200;
            if (fishermans <= 6) {
                boatRent = boatRent * 0.9;
                if (fishermans % 2 === 0) {
                    boatRent = boatRent * 0.95;
                }
            } else if (fishermans >= 7 && fishermans <= 11) {
                boatRent = boatRent * 0.85;
                if (fishermans % 2 === 0) {
                    boatRent = boatRent * 0.95;
                }
            } else if (fishermans >= 12) {
                boatRent = boatRent * 0.75;
                if (fishermans % 2 === 0) {
                    boatRent = boatRent * 0.95;
                }
            }
            break;
            case "Autumn":
                boatRent = 4200;
                if (fishermans <= 6) {
                    boatRent = boatRent * 0.9;
                    
                } else if (fishermans >= 7 && fishermans <= 11) {
                    boatRent = boatRent * 0.85;
                   
                } else if (fishermans >= 12) {
                    boatRent = boatRent * 0.75;
                    
                }
                break;
                case "Winter":
                    boatRent = 2600;
                    if (fishermans <= 6) {
                        boatRent = boatRent * 0.9;
                        if (fishermans % 2 === 0) {
                            boatRent = boatRent * 0.95;
                        }
                    } else if (fishermans >= 7 && fishermans <= 11) {
                        boatRent = boatRent * 0.85;
                        if (fishermans % 2 === 0) {
                            boatRent = boatRent * 0.95;
                        }
                    } else if (fishermans >= 12) {
                        boatRent = boatRent * 0.75;
                        if (fishermans % 2 === 0) {
                            boatRent = boatRent * 0.95;
                        }
                    }
                    break;
        
    }
    if (budget > boatRent ) {
        console.log(`Yes! You have ${(budget - boatRent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(boatRent - budget).toFixed(2)} leva.`);
    }
}

neadedRent(2000,
    "Winter",
    13);

    
// Цената зависи от сезона:
// Цената за наем на кораба през пролетта е  3000 лв.
// Цената за наем на кораба през лятото и есента е  4200 лв.
// Цената за наем на кораба през зимата е  2600 лв.
// В зависимост от броя си групата ползва отстъпка:
// Ако групата е до 6 човека включително  –  отстъпка от 10%.
// Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
// Ако групата е от 12 нагоре  –  отстъпка от 25%. 
// Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат допълнителна отстъпка. 
// Напишете функция, която да пресмята дали рибарите ще съберат достатъчно пари.