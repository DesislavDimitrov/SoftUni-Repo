function repeat(text, n) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result += text;

    }
    return result ;
    

} let result = repeat("String",
    2);
    console.log(result);