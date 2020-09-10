function solve(runner1, runner2, runner3) {
    runner1 = Number(runner1);
    runner2 = Number(runner2);
    runner3 = Number(runner3);
    
    let totalTime = runner1 + runner2 + runner3;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);

    } else{
        console.log(`${minutes}:${seconds}`);
    
    }

}
solve("35", "45", "44");
solve("22", "7", "34");
solve("50", "50", "49");
solve("14", "12", "10");