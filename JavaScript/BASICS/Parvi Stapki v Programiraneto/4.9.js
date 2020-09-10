function solve(surface) {
    let price = 7.61;
    surface = Number(surface);
   
    let calc = surface * price;
    let discount = calc * 0.18;
    let final = calc - discount;
    console.log(`The final price is: ${final} lv.`)
    console.log(`The discount is: ${discount} lv.`) 
    
    
}

solve("550")

