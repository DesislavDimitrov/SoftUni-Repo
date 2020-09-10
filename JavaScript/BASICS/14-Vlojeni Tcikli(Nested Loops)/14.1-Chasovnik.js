function clock() {
    let hourEnd = 23;
    let minuteEnd = 59;

    for (let h = 0; h <= hourEnd; h++) {
       
       for (let m = 0; m <= minuteEnd; m++) {
        let output = `${h}:`;
        if (h < 10) {
            output = `0${h}:`
        }

        
            
            if(m < 10){
                output += `0${m}`;
            } else {
                output += m;
            }
            console.log(output);
        }
    }
}
clock();