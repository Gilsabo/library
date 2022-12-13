
const displayBook = document.querySelector('.book-display');
const buttonPopUp = document.querySelector('.button-popup');
const formPopUp = document.querySelector('.form-popup');
const submitButton = document.querySelector('.submit');
const overlay = document.querySelector('#overlay');
const titleDiv = document.querySelector('.title');
const authorDiv = document.querySelector('.author');
const pagesDiv = document.querySelector('.pages');
const readDiv = document.querySelector('.status');

buttonPopUp.addEventListener('click',()=>{
    if(formPopUp.style.display ==='none'){
        formPopUp.style.display ='block';
        overlay.style.display='block';
    }else{
        formPopUp.style.display ='none';
        overlay.style.display='none';
    }
});  




function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}


const HarryPotter = new Book('Harry', 'JK Rowling', '44', 'read');

let myLibrary = [HarryPotter.info()];


submitButton.addEventListener('click', (e)=>{
e.preventDefault();
formPopUp.style.display ='none';
overlay.style.display='none'
const title= document.getElementById('title').value;
const author=document.getElementById('author').value;
const pages=document.getElementById('pages').value;
let read = document.getElementById('read');
if (read.checked===true){
    read='read';
}else{
    read='no read'; 
}

const booking = new Book (title, author, pages, read);

const divSubTitle =document.createElement('div');
divSubTitle.classList.add('.subTitle');
const textSubTitle = document.createTextNode(booking.title);
divSubTitle.appendChild(textSubTitle);
displayBook.appendChild(divSubTitle);

const divSubAuthor =document.createElement('div');
divSubAuthor.classList.add('subAuthor');
const textSubAuthor = document.createTextNode(booking.author);
divSubAuthor.appendChild(textSubAuthor);
displayBook.appendChild(divSubAuthor);


const divSubPages =document.createElement('div');
divSubPages.classList.add('subPages');
const textSubPages = document.createTextNode(booking.pages);
divSubPages.appendChild(textSubPages);
displayBook.appendChild(divSubPages);



const divSubRead =document.createElement('div');
divSubRead.classList.add('subRead');
const textSubRead = document.createTextNode(booking.read);
divSubRead.appendChild(textSubRead);
displayBook.appendChild(divSubRead);


myLibrary.push(booking);

document.querySelector('form').reset();


})

displayBook.textContent= HarryPotter.info();






/*function addBookToLibrary() {

    
    const divSubTitle =document.createElement('div')
    divSubTitle.classList.add('.title')
    const textSubTitle = document.createTextNode(myLibrary.title)
    divSubTitle.appendChild(textSubTitle);
    titleDiv.appendChild(divSubTitle)
        
        
    }*/