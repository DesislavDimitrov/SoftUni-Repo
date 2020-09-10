function furniture(text) {

    

    let pattern = />>(?<furniture>\w+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/;

    let matches = Array.from(pattern.matchAll(regex));

    console.log(matches[0]);


}
furniture