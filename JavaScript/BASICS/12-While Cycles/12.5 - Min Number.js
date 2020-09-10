function minNum(input) {
    let i = 0;
    let inElement = input[0];
    let min = Number.MAX_SAFE_INTEGER;

    while (inElement !== "Stop") {
        let num = Number(inElement);
        if (num < min) {
            min = num;
        }
        inElement = input[i];
        i++;
    }https://drive.google.com/drive/folders/1_EPUlhuRwTCB_ffRHzxVFRa-4QDGAigZ?usp=sharing
    console.log(min);


}
minNum(["100",
"99",
"80",
"70",
"Stop"]);