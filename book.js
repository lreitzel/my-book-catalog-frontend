class Book {
    constructor({title, author, read, genre_id}) {
        this.title = title;
        this.author =author;
        this.read = read;
        this.genre_id = genre_id;
    }

    renderBook(){
        const bookLi = document.createElement('li');
        bookLi.innerText = `${this.title}`;
        bookLi.addEventListener('click', () => {
            const bookInfo = this.renderBookInfo();
            bookLi.appendChild(bookInfo);
        })
        return bookLi;
    }

    renderBookInfo(){
        const bookDiv = document.createElement('div');
        bookDiv.innerHTML = `
            <h3>Author: ${this.author}</h3>
            <h3>Read: ${this.read}</h3>
        `
        return bookDiv;
    }
}