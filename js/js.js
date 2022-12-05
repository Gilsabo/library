
const display = document.querySelector('.book-display');
const buttonPopUp = document.querySelector('.button-popup');
const formPopUp = document.querySelector('.form-popup')

buttonPopUp.addEventListener('click',()=>{
formPopUp.style.display ='block';

});  






function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = ['yes I read it','I did not read it yet']
    this.info = function(){
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read[0]}`
    }

}

function addBookToLibrary() {

    
}

let harry= new Book('Harry potter', 'jjkk', '200', 'yes');

let myLibrary = [harry.info()];


display.innerHTML = myLibrary