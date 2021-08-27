const bookAPI = new BookServices("http://localhost:3000/books");
class Genre {

    constructor({id, name, books}) {
        this.id = id
        this.name = name;
        this.books = books;
    }

    renderGenre(){
        const genreCard = document.getElementById('book-container');
        const genreList = document.createElement('div');
        genreList.className = 'bookCard';
        genreList.id = `list-${this.id}`;
        genreList.innerHTML = `<h2>${this.name}</h2>`;
        genreCard.appendChild(genreList);
        genreList.appendChild(this.renderBooks());
        genreList.appendChild(this.renderBookForm())
    };

    renderBooks(){
        const bookDiv = document.createElement('div');
        bookDiv.id = `all-books-${this.id}`
        bookDiv.classList.add('books');
        this.books.forEach(book => {
            const newBook = new Book(book);
            bookDiv.appendChild(newBook.renderBook());
        });
        return bookDiv;
    };

    renderBookForm(){
        const bookFormDiv = document.createElement('div');
        bookFormDiv.classList.add('book-form-div');
        const bookForm = document.createElement('form');
        bookForm.className = 'book-form';
        bookForm.id = `form-${this.id}`;
        bookForm.innerHTML = `
            <input type="hidden" value=${this.id} id="genre_id"></input>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title"></input>
            <label for="author">Author:</label>
            <input type="text" id="author" name="author"></input>
            <label for="read">Read:</label>
            <input type="checkbox" id="read" name="read"></input>
            <button>Add New Book</button>
        `;
        const checkbox = bookForm.querySelector("input#read");
        checkbox.checked ? checkbox.value = "true" : checkbox.value = "false";
        bookForm.addEventListener('submit', bookAPI.createBook.bind(bookAPI));
        bookFormDiv.append(bookForm);
        return bookFormDiv;
    };
    
};