
class BookServices {
    constructor(baseURL) {
        this.baseURL = baseURL;
    };

    createBook(event){
        event.preventDefault();
        const bookFormData = {
            title: event.target.children[2].value,
            author: event.target.children[4].value,
            read: event.target.children[6].value,
            genre_id: event.target.children[0].value
        };
        const config = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(bookFormData)
        };
        fetch(this.baseURL, config)
        .then(resp => resp.json())
        .then(data => {
            const newBook = new Book(data)
            const bookUL = document.getElementById(`all-books-${newBook.genre_id}`)
            bookUL.appendChild(newBook.renderBook());
            // bookUL.appendChild(newBook.renderDeleteButton());
            event.target.reset();
        });

    };

    deleteBook(id) {
        const config = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch(`${this.baseURL}/${id}`, config)
        .then(resp => console.log(resp))
        // .then(data => console.log(data.message));
    };
    
}
