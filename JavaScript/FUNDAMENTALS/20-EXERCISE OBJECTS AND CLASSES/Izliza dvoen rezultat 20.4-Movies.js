function movies(input) {
    let movies = [];

    input.forEach(line => {
        const object = line.split(' ');
        const addIndex = object.indexOf("addMovie");
        const directorIndex = object.indexOf("directedBy");
        const dateIndex = object.indexOf("onDate");

        if (addIndex > -1) {
            movies.push({ name: object.slice(addIndex + 1).join(" ") })
        }
        if (directorIndex > -1) {
            const name = object.slice(0, directorIndex).join(" ");
            const director = object.slice(directorIndex + 1).join(" ");
            const movie = movies.find(movie => movie.name === movie);
            movies.forEach(movie =>{
                if (movie.name === name) {
                movie.director = director;
            }
        })
        



    } 
        if (dateIndex > -1) {
        const name = object.slice(0, dateIndex).join(" ");
        const date = object.slice(dateIndex + 1).join(" ");

        movies.forEach(movie => {
            if (movie.name === name) {
                movie.date = date;
            }
        })
   
    }

});
movies.forEach(movie => {
    if (movie.name !== undefined
        && movie.director !== undefined
        && movie.date !== undefined) {
        console.log(JSON.stringify(movies))
    }
})

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);