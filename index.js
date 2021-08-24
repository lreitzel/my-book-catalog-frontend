console.log('Hey Lydia')

const baseURL = "http://localhost:3000"

const genAPI = new GenreServices(baseURL);


document.addEventListener('DOMContentLoaded', () => {
    genAPI.getGenres();
})