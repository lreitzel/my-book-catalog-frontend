
class BookServices {
    constructor(baseURL) {
        this.baseURL = baseURL;
    };

    createBook(event){
        event.preventDefault();
        const bookForm = event.target
        const checkbox = bookForm.querySelector("input#read");
        const checkValue = checkbox.checked ? checkbox.value = true : checkbox.value = false;
        const bookFormData = {
            title: event.target.children[2].value,
            author: event.target.children[4].value,
            read: checkValue,
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
        .then(function(resp) {
            if (resp.status === 204) {
                console.log("Book Deleted!")
            }
        })
        
    };
    
}
