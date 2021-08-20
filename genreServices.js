class GenreServices {

    constructor(baseUrl){
        this.baseUrl = baseUrl;
    };

    getGenres(){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(genres => {
            genres.forEach(genre => {
                const genreList = document.getElementById('book-container');
                const genreName = document.createElement('div');
                genreName.innerHTML = ''
                genreName.innerHTML += `<h3>${genre.name}</h3>`
                genreList.appendChild(genreName)
            });
        });
    };

    // renderGenre(){
    //     const genreList = document.getElementById('book-container');
    //     const genreName = document.createElement('div');
    //     genreName.innerHTML = ''
    //     genreName.innerHTML += `<h3>${genre.name}</h3>`
    //     genreList.appendChild(genreName)
    // }
    
}