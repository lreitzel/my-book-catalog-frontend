class GenreServices {

    constructor(baseURL){
        this.baseURL = `${baseURL}/genres`;
    };

    getGenres(){
        fetch(this.baseURL)
        .then(resp => resp.json())
        .then(genres => {
            genres.forEach(genre => {
                const gen = new Genre(genre);
                gen.renderGenre();
            });
        });
    };
    
}