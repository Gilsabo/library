const container = document.querySelector('.container')
const buttonPopUp = document.querySelector('.button-popup');
const formPopUp = document.querySelector('.form-popup');
const submitButton = document.querySelector('.submit');
const overlay = document.querySelector('#overlay');
const titleDiv = document.querySelector('.title');
const authorDiv = document.querySelector('.author');
const pagesDiv = document.querySelector('.pages');
const readDiv = document.querySelector('.status');
const buttonRemove= document.querySelector('.buttonRemove');
const span =document.querySelector('span')




buttonPopUp.addEventListener('click',()=>{
    if(formPopUp.style.display ==='none'){
        formPopUp.style.display ='block';
        overlay.style.display='block';
    }else{
        formPopUp.style.display ='none';
        overlay.style.display='none';
    }
});  

span.addEventListener('click',()=>{
    formPopUp.style.display ='none';
        overlay.style.display='none';
        document.querySelector('form').reset();
})



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
const tito = new Book ('tito','trias','33', 'yesss');
const trias = new Book ('trias', 'baste', '444', 'yesss')

let myLibrary = [];


submitButton.addEventListener('click', (e)=>{
e.preventDefault();
formPopUp.style.display ='none';
overlay.style.display='none';

const title= document.getElementById('title').value;
const author=document.getElementById('author').value;
const pages=document.getElementById('pages').value;
read = document.getElementById('read');

const booking = new Book (title, author, pages, read);

const displayBook = document.createElement('div');
displayBook.classList.add('book-display');
container.appendChild(displayBook);

const divSubTitle =document.createElement('div');
divSubTitle.classList.add('subTitle');
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
const buttonRead = document.createElement('BUTTON');
buttonRead.classList.add('subStatus');
if (read.checked===true){
    const textButtonRead =  document.createTextNode('Read')
    buttonRead.appendChild(textButtonRead);
    divSubRead.appendChild(buttonRead);
    displayBook.appendChild(divSubRead);
    
    
}else{
    const textButtonNotRead =  document.createTextNode('No read')
    buttonRead.appendChild(textButtonNotRead);
    divSubRead.appendChild(buttonRead);
    displayBook.appendChild(divSubRead);
    
}


const buttonDelete =document.createElement('BUTTON');
buttonDelete.classList.add('buttonRemove');
const textButtonDelete = document.createTextNode('Delete');
buttonDelete.appendChild(textButtonDelete);
divSubRead.appendChild(buttonDelete);
displayBook.appendChild(divSubRead);

myLibrary.push(booking);

document.querySelector('form').reset();


const classes = document.querySelectorAll('.book-display');
for(let i=0;i<classes.length;i++){
    classes[i].setAttribute("data-num", i) ;
    }


})


/*Book.prototype.statusRead= function(read){
    if (read.checked===true){

    console.log('yes')

    }else{
    read ='no'
    }
}
*/









container.addEventListener('click', (e)=>{
    if(e.target.className === 'buttonRemove'){
        console.log(e.target.parentNode.parentNode.dataset.num)
        const eraseBookLibrary = e.target.parentElement.parentElement.remove();   
        myLibrary.splice(eraseBookLibrary,1);
    }
})

container.addEventListener('click', (e)=>{
    if(e.target.className ==='subStatus'&& e.target.innerText==='Read'){
        console.log(e);
       e.target.innerText = 'No read';
    }else if(e.target.className ==='subStatus'&& e.target.innerText==='No read'){
        e.target.innerText = 'Read';

       }
})


