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
        bookP.id = `p-${this.id}`;
        bookP.innerText = `${this.title}`;
        const bookDeleteButton = this.renderDeleteButton();
        bookP.appendChild(bookDeleteButton);
        bookP.addEventListener('click', () => {
            const bookInfo = this.renderBookInfo();
            
            bookP.appendChild(bookInfo);
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
        bookDiv.innerHTML = `
            <p>Author: ${this.author}</p>
            <p>Read: ${this.read}</p>
        `
        // const bookDeleteButton = this.renderDeleteButton();
        // bookDiv.appendChild(bookDeleteButton);
        return bookDiv;
    };

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