function wordReader(input) {

    let i = 0;

    while (true) {
        let word = input[i];
        i++;
        if (word === "Stop"){
            break;
        }
           console.log(word); 
    }
    

}
wordReader(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"]);


// function solve(num) {
//     let a = 5;
//     while(true){
//         if (a > 10){ 
//             break;

//         }
//         console.log("a = " + a);
//         a++;
//     }

// }
// solve()