function buildingFloors(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let currentFloor = floors; currentFloor >= 1; currentFloor--) {
        let type = '';
        let flloorOutput = '';

        if (currentFloor === floors) {
            type = 'L';
        } else if (currentFloor % 2 === 1) {
            type = 'A';
        } else {
            type = 'O';
        }
        for (let currentRoom = 0; currentRoom < rooms; currentRoom++) {
            flloorOutput += `${type}${currentFloor}${currentRoom} `;
        }
        console.log(flloorOutput);
    }
}

buildingFloors(["9", "5"]);