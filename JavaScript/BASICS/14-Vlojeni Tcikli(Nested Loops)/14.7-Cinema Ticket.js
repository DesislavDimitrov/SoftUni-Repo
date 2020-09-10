function cinemaTicket(input) {
    let studentsTicket = 0;
    let standartTicket = 0;
    let kidTicket = 0;
    let filmName = input[0];
    let freeSeats = Number(input[1]);
    let sumStandart = 0;
    let sumStudent = 0;
    let sumKid = 0;

    for (let i = 2; i < input.length; i++) {

        if (input[i] === "standard") {
            standartTicket++;


        } else if (input[i] === "student") {
            studentsTicket++;

        } else if (input[i] === "kid") {
            kidTicket++;

        } else if (input[i] === "End" || (standartTicket + studentsTicket + kidTicket) === freeSeats) {

            sumStandart += standartTicket;
            sumStudent += studentsTicket;
            sumKid += kidTicket;
            console.log(`${filmName} - ${((standartTicket + studentsTicket + kidTicket) * 100 / freeSeats).toFixed(2)}% full.`);
            i++;
            filmName = input[i];
            i++;
            freeSeats = Number(input[i]);
            standartTicket = 0;
            studentsTicket = 0;
            kidTicket = 0;
            continue;

        } if (input[i] === "Finish") {
            break;

        }


    }
    let totalTickets = sumStandart + sumStudent + sumKid;
    console.log(`Total tickets: ${(sumStandart + sumStudent + sumKid).toFixed(0)}`);
    console.log(`${(sumStudent * 100 / totalTickets).toFixed(2)}% student tickets.`);
    console.log(`${(sumStandart * 100 / totalTickets).toFixed(2)}% standard tickets.`);
    console.log(`${(sumKid * 100 / totalTickets).toFixed(2)}% kids tickets.`);
}

cinemaTicket(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"]);