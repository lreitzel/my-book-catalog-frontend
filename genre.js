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
        genreList.innerHTML = `<h3>${this.name}</h3>`;
        genreCard.appendChild(genreList);
        genreList.appendChild(this.renderBooks());
        genreList.appendChild(this.renderBookForm())
    };

    renderBooks(){
        const bookUL = document.createElement('ul');
        bookUL.classList.add('books');
        this.books.forEach(book => {
            const newBook = new Book(book);
            bookUL.appendChild(newBook.renderBook());
            bookUL.appendChild(newBook.renderDeleteButton());
        });
        return bookUL;
    };

    renderBookForm(){
        const bookForm = document.createElement('form');
        bookForm.className = 'book-form';
        bookForm.id = `form-${this.id}`;
        bookForm.innerHTML = `
            <input type="hidden" value=${this.id} id="genre_id"></input>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title"></input>
            <label for="author">Author:</label>
            <input type="author" id="author" name="author"></input>
            <label for="read">Read:</label>
            <input type="text" id="read" name="read"></input>
            <input type="submit"></input>
        `;
        bookForm.addEventListener('submit', bookAPI.createBook)
        return bookForm;
    };
    
};