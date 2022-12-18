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
const span =document.querySelector('span');
let readStatus =document.getElementById('read-status')



// open form
buttonPopUp.addEventListener('click',()=>{
    if(formPopUp.style.display ==='none'){
        formPopUp.style.display ='block';
        overlay.style.display='block';
    }else{
        formPopUp.style.display ='none';
        overlay.style.display='none';
    }
});  
//close form
span.addEventListener('click',()=>{
    formPopUp.style.display ='none';
        overlay.style.display='none';
        document.querySelector('form').reset();
})


// constructor function
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

// creat empty array to push the instances of book and declare the variables of book
let myLibrary = [];
let read ='';
let pages=''
let author=''
let title=''

//get the values from de form when clicked submit button
submitButton.addEventListener('click', (e)=>{
e.preventDefault();
formPopUp.style.display ='none';
overlay.style.display='none';

//pass arguments to the constructor function

title= document.getElementById('title').value;
author=document.getElementById('author').value;
pages=document.getElementById('pages').value;

if (readStatus.checked===true){
    read='yes'
}else{
    read='no'
}


const booking = new Book (title, author, pages, read);

//create div to append the arguments

const displayBook = document.createElement('div');
displayBook.classList.add('book-display');
container.appendChild(displayBook);

//create div and class to diplay title
const divSubTitle =document.createElement('div');
divSubTitle.classList.add('subTitle');
const textSubTitle = document.createTextNode(booking.title);
divSubTitle.appendChild(textSubTitle);
displayBook.appendChild(divSubTitle);

//create div and class to diplay author
const divSubAuthor =document.createElement('div');
divSubAuthor.classList.add('subAuthor');
const textSubAuthor = document.createTextNode(booking.author);
divSubAuthor.appendChild(textSubAuthor);
displayBook.appendChild(divSubAuthor);

//create div and class to diplay pages
const divSubPages =document.createElement('div');
divSubPages.classList.add('subPages');
const textSubPages = document.createTextNode(booking.pages);
divSubPages.appendChild(textSubPages);
displayBook.appendChild(divSubPages);

//create div and class to diplay status
const divSubRead =document.createElement('div');
divSubRead.classList.add('subRead');
const buttonRead = document.createElement('BUTTON');
buttonRead.classList.add('subStatus');

if (read==='yes'){

    console.log(readStatus.checked===true)
    const textButtonRead =  document.createTextNode('Read')
    buttonRead.appendChild(textButtonRead);
    divSubRead.appendChild(buttonRead);
    displayBook.appendChild(divSubRead);    
    
}else if (read==='no'){
    console.log(read.checked===false)
    const textButtonNotRead =  document.createTextNode('No read')
    buttonRead.appendChild(textButtonNotRead);
    divSubRead.appendChild(buttonRead);
    displayBook.appendChild(divSubRead);
}

//add button delete
const buttonDelete =document.createElement('BUTTON');
buttonDelete.classList.add('buttonRemove');
const textButtonDelete = document.createTextNode('Delete');
buttonDelete.appendChild(textButtonDelete);
divSubRead.appendChild(buttonDelete);
displayBook.appendChild(divSubRead);

myLibrary.push(booking);
//reset values after click button submit
document.querySelector('form').reset();

//add data-attribute to acces to every book display 
const classes = document.querySelectorAll('.book-display');
for(let i=0;i<classes.length;i++){
    classes[i].setAttribute("data-num", i) ;
    }

})

//add event delegation to reach dynamic buttonremove and delete book
container.addEventListener('click', (e)=>{
    if(e.target.className === 'buttonRemove'){
        console.log(e.target.parentNode.parentNode.dataset.num)
        const eraseBookLibrary = e.target.parentElement.parentElement.remove();   
        myLibrary.splice(eraseBookLibrary,1);
    }
})
//add event delegation to toggle button read/no read and change text of the button and value of read
container.addEventListener('click', (e)=>{
    if(e.target.className ==='subStatus'&& e.target.innerText==='Read'){
        console.log(e);
       e.target.innerText = 'No read';
       myLibrary[e.target.parentNode.parentNode.dataset.num].read='no'
       
    }else if(e.target.className ==='subStatus'&& e.target.innerText==='No read'){
        e.target.innerText = 'Read';
        myLibrary[e.target.parentNode.parentNode.dataset.num].read='yes'

       }
})

