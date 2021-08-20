console.log('Hey Lydia')

// const baseURL = "http://localhost:3000"

const genAPI = new GenreServices("http://localhost:3000/genres");

document.addEventListener('DOMContentLoaded', () => {
    genAPI.getGenres();
})