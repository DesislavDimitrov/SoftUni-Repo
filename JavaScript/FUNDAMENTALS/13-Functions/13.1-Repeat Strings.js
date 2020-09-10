function repeatString(string, n) {

    let concantenate = '';

    for (let i = 0; i < n; i++) {
        concantenate += string;
    }
    
    console.log(concantenate);
    return concantenate

}
repeatString(
    "abc",
    3);