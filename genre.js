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
        genreList.setAttribute('id', `list-${this.id}`);
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
        });
        return bookUL;
    };

    renderBookForm(){
        const bookForm = document.createElement('form');
        bookForm.setAttribute('action', '/books');
        bookForm.setAttribute('method', 'post')
        bookForm.setAttribute('id', 'book-form');
        bookForm.innerHTML = `
            <label for="title">Title:</label>
            <input type="text" id="title" name="title"></input>
            <label for="author">Author:</label>
            <input type="author" id="author" name="author"></input>
            <label for="read">Read:</label>
            <input type="text" id="read" name="read"></input>
            <input type="submit"></input>
        `;
        return bookForm;
    };
    
};