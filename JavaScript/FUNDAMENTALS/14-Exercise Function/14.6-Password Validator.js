function passwordValidator(password) {

    let passLength = password.split('');
    let digitCounter = 0;
    let isValid = true;

    if (passLength.length < 6 || passLength.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    } 
    for (let i = 0; i < passLength.length; i++) {

        let asciiChar = passLength[i].charCodeAt(0);
        if (!((asciiChar >= 48 && asciiChar <= 57) || (asciiChar >= 65 && asciiChar <= 90) || (asciiChar >= 97 && asciiChar <= 122))) {
            console.log("Password must consist only of letters and digits");
            isValid = false;
            break;
        }
    }

    for (let i = 0; i < passLength.length; i++) {
        let asciNum = passLength[i].charCodeAt(0)
        if (asciNum >= 48 && asciNum <= 57) {
            digitCounter++;
        }
    }
    
    if (digitCounter < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if(isValid){
        console.log("Password is valid");
    }

} passwordValidator('Pa$s1s2')