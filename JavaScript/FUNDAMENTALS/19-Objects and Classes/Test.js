function catInfo(input) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    let cats = [];

    for (let i = 0; i < input.length; i++) {
        let catProp = input[i].split(' ');

        let [name, ageText] = catProp;
        let cat = new Cat(name, Number(ageText));

        cats.push(cat);

    }

    cats.forEach(x => x.meow())
}
catInfo(['Mellow 2', 'Tom 5']);