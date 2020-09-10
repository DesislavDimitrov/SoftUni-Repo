function message(input) {
    let wordCount = 1;

    for (let i = 0; i < input.length; i++) {

        let current = input[i];

        if (current === " ") {
            wordCount++
        }
    }
    if (wordCount > 10) {
        console.log(`The message is too long to be send! Has ${wordCount} words.`);
    } else {
        console.log(`The message was send successfully!`);
    }
}

message("This message has exactly eleven words. One more as it's allowed!");