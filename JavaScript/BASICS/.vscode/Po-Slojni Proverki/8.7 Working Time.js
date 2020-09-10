function workingTime(time, day) {
    
    time = Number(time);
    if (day !== "Sunday") {
        if (time >= 10 && time <= 18) {
            console.log("open");
        } else{
            console.log("closed");
        }
    } else {
        console.log("closed");
    }
}
workingTime("11",
"Sunday")