class BookServices {
    constructor(baseURL) {
        this.baseURL = baseURL;
    };

    createBook(book){
        const config = {
            method:'Post',
            header: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(book)
        };

        fetch(this.baseURL, config)
        .then(resp => resp.json())
        .then(data => {
            const newBook = new Book(data)
            const genreList = document.getElementById(`list-${newBook.genre_id}`)
            genreList.appendChild(newBook.renderBook()) 
        });
    };
    
}