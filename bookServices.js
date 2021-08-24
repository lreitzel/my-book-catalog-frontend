class BookServices {
    constructor(baseURL) {
        this.baseURL = baseURL;
    };

    createBook(event){
        event.preventDefault();
        const bookFormData = {
            title: document.getElementById('title').value,
            author: document.getElementById('author').value,
            read: document.getElementById('read').value,
            genre_id: document.getElementById('genre_id').value
        }
        const config = {
            method:'Post',
            header: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(bookFormData)
        };
        console.log(this.baseURL)
        fetch(this.baseURL, config)
        .then(resp => resp.json())
        .then(data => {
            const newBook = new Book(data)
            const genreList = document.getElementById(`list-${newBook.genre_id}`)
            genreList.appendChild(newBook.renderBook())
        });
    };

    deleteBook(id) {
        console.log(id)
        const config = {
            method: 'DELETE'
        };
        fetch(`${this.baseURL}/${id}`, config)
        .then(resp => console.log(resp))
        // .then(data => console.log(data.message));
    }
    
}
