function solve(input) {
    // for (const line of input) {
    //     console.log(line.substr(7));
    //     console.log(line.substring(7, 8));
    // }
    // let text = 'Hello, www.abv.bg and softuni.bg';

    let text = 'Hello, www.abv.bg and softuni.bg';
    text = text.replace('.bg', '.com');


    while (text.indexOf('.bg') > -1) {
        text = text.replace('.bg', '.com');
        
    }


    console.log(text);
}


solve(['Hello, Gosho',
    'Hello, Pesho',
    'Hello, Dido',
    'Hello, Kiril',])
