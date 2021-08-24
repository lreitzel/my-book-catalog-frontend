class Book {
    constructor({id, title, author, read, genre_id}) {
        this.id = id;
        this.title = title;
        this.author =author;
        this.read = read;
        this.genre_id = genre_id;
    };

    renderBook(){
        const bookLi = document.createElement('li');
        bookLi.id = `li-${this.id}`;
        bookLi.innerText = `${this.title}`;
        bookLi.addEventListener('click', () => {
            const bookInfo = this.renderBookInfo();
            bookLi.appendChild(bookInfo);
        });
        return bookLi;
    };
    renderDeleteButton() {
        const deleteBookBtn = document.createElement('button');
        deleteBookBtn.classList.add('delete-button');
        deleteBookBtn.id = `deletebtn-${this.id}`
        deleteBookBtn.innerText = 'X';
        deleteBookBtn.addEventListener('click', (event) => {
            this.handleDeleteClick(event);
        });
        return deleteBookBtn;
    };
    
    renderBookInfo(){
        const bookDiv = document.createElement('div');
        bookDiv.innerHTML = `
        <h3>Author: ${this.author}</h3>
            <h3>Read: ${this.read}</h3>
        `
        return bookDiv;
    };

    handleDeleteClick = (event) => {
        if (event.target.className === 'delete-button'){
            bookAPI.deleteBook(`${this.id}`);
            const li = document.getElementById(`li-${this.id}`);
            const dltbtn = document.getElementById(`deletebtn-${this.id}`);
            li.remove();
            dltbtn.remove();
        };
    }

    
}