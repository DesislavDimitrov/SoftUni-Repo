function surface(figure, size1, size2) {
 
    
    let area;
    if (figure === "square") {
        let a = Number(size1);
        area = a * a;
        
    } else if (figure === "rectangle") {
        let a = Number(size1);
        let b = Number(size2);
        area = a * b;
    } else if (figure === "circle") {
        let a = Number(size1);
        area = Math.pow(a,2) * Math.PI;

    } else {
        let a = Number(size1);
        let ah = Number(size2);
        area = a * ah / 2;
    }
        console.log(area.toFixed(3));

    
}
surface("square", "5");
