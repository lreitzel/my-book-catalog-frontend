class GenreServices {

    constructor(baseUrl){
        this.baseUrl = baseUrl;
    };

    getGenres(){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(genres => {
            genres.forEach(genre => {
                const gen = new Genre(genre);
                gen.renderGenre();
            });
        });
    };
    
}