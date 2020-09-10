function onTimeForTheExam([arg1, arg2, arg3, arg4]) {
    let examHour = Number(arg1);
    let examMinutes = Number(arg2);
    let arrivalHour = Number(arg3);
    let arrivalMinutes = Number(arg4);

    let examTotalMinutes = examMinutes + examHour * 60;
    let arrivalTotalMinutes = arrivalMinutes + arrivalHour * 60;

    let timeDifference = examTotalMinutes - arrivalTotalMinutes;

    if (timeDifference < 0) {
        console.log("Late");
        if (Math.abs(timeDifference) < 60) {
            console.log(Math.abs(timeDifference) + " minutes after the start");
        }else{
            let hours = Math.abs(Math.trunc(timeDifference / 60));
            let minutes = Math.abs(timeDifference % 60);
            if(minutes < 10) {
                minutes = `0${minutes}`;
            }
            console.log(`${hours}:${minutes} hours after the start`);
        }
    } else if (timeDifference <= 30) {
        console.log("On time");
        if(timeDifference != 0) {
console.log(timeDifference + " minutes before the start");
        }

    } else {
        console.log("Early");
        if (timeDifference < 60) {
            console.log(timeDifference + " minutes before the start");
        }else{
            let hours = Math.abs(Math.trunc(timeDifference / 60));
            let minutes = Math.abs(timeDifference % 60);
            if(minutes < 10) {
                minutes = `0${minutes}`;
            }
            console.log(`${hours}:${minutes} hours before the start`);
        }

    }
}
onTimeForTheExam(["9", "10", "9", "00"]);