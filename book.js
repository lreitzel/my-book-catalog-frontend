class Book {
    constructor({id, title, author, read, genre_id}) {
        this.id = id;
        this.title = title;
        this.author =author;
        this.read = read;
        this.genre_id = genre_id;
    };

    renderBook(){
        const bookP = document.createElement('p');
        bookP.classList.add('book');
        bookP.id = `p-${this.id}`;
        bookP.innerText = `${this.title}`;
        const bookDeleteButton = this.renderDeleteButton();
        bookP.appendChild(bookDeleteButton);
        bookP.addEventListener('click', (event) => {
            this.handleBookInfoClick(event);
        });
        return bookP;
    };

    renderDeleteButton() {
        const deleteBookBtn = document.createElement('button');
        deleteBookBtn.classList.add('delete-button');
        deleteBookBtn.id = `deletebtn-${this.id}`
        deleteBookBtn.innerText = 'x';
        deleteBookBtn.addEventListener('click', (event) => {
            this.handleDeleteClick(event);
        });
        return deleteBookBtn;
    };
    
    renderBookInfo(){
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-info-card');
        bookDiv.id = `info-card-${this.id}`;
        bookDiv.innerHTML = `
            <p>Author: ${this.author}</p>
            <p>Read: ${this.read}</p>
        `
        return bookDiv;
    };

    handleBookInfoClick = (event) => {
        if (event.target.className === 'book'){
            const bookInfo = this.renderBookInfo();
            event.target.appendChild(bookInfo);
            event.target.classList.toggle('active');
        } else if (event.target.className === 'book active'){
            const bookInfoDiv = document.getElementById(`info-card-${this.id}`);
            bookInfoDiv.remove();
            event.target.classList.remove('active')
        }

    }

    handleDeleteClick = (event) => {
        if (event.target.className === 'delete-button'){
            bookAPI.deleteBook(`${this.id}`);
            const p = document.getElementById(`p-${this.id}`);
            const dltbtn = document.getElementById(`deletebtn-${this.id}`);
            p.remove();
            dltbtn.remove();
        };
    }

    
}