function songsForPlay(input) {

    

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }

    }

    let songs = [];
    let numberOfSongs = input.shift();
    let typeSong = input.pop();

    for (let i = 0; i < numberOfSongs; i++) {

        let songData = input[i].split('_');

        let [type, name, time] = songData;

        let song = new Song(type, name, time);

        songs.push(song);
        
    }
   if(typeSong === `all`){
      songs.forEach((i) => console.log(i.name));
   }else {
       let filterSongs = songs.filter((i) => i.type === typeSong);
       filterSongs.forEach((i) => console.log(i.name));
   }

}
songsForPlay([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);