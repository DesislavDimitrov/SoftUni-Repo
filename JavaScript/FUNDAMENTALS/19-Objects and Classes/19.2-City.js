function cityInfo(name, area, population, country, postcode) {

    let city = {name: name,
         area: Number(area), 
         population: Number(population), 
         country: country, 
         postCode: Number(postcode)}

         for(let key in city){
             console.log(`${key} -> ${city[key]}`);
         }
}
cityInfo("Sofia"," 492", "1238438", "Bulgaria", "1000")