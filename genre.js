class Genre {

    constructor({name, books}) {
        this.name = name;
        this.books = books;
    }

    renderGenre(){
        const genreList = document.getElementById('book-container');
        const genreName = document.createElement('div');
        genreName.className = 'bookCard';
        genreName.id = `list-${this.id}`;
        genreName.innerHTML = `<h3>${this.name}</h3>`;
        genreList.appendChild(genreName);
        genreName.appendChild(this.renderBooks());
    };

    renderBooks(){
        const bookUL = document.createElement('ul');
        bookUL.classList.add('books');
        this.books.forEach(book => {
            const newBook = new Book(book);
            bookUL.appendChild(newBook.renderBook());
        });
        return bookUL;
    };
    
};