function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then (resp => resp.json())
  .then (json => renderBooks(json));
  
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  findBook()
  findCharacter()
  allPages()
})

function findBook() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then (resp => resp.json())
  .then (books => fifthBook(books));
}

function fifthBook(books){
  console.log('hello')
  let main = document.querySelector('main')
  let h1 = document.createElement('h1')
  h1.innerHTML = `<h1>5th book is: ${books[4].name}</h1>`
  main.appendChild(h1);
}

function findCharacter() {
  return fetch('https://anapioficeandfire.com/api/characters')
  .then (resp => resp.json())
  .then (characters => getChar(characters));
}

function getChar(characters){
  // debugger
  console.log('helloagain')
  let main = document.querySelector('main')
  let h1 = document.createElement('h1')
  h1.innerHTML = `<h1>The 1031st Character is ${characters[1].name}</h1>`
  main.appendChild(h1);
}

function allPages() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then (resp => resp.json())
  .then (books => countPages(books));
}

function countPages(books){
  console.log('hello3')
  // debugger
   
  function theCount(books) {
    let pageCounter = 0;    
    for (let i = 0; i<books.length; i++){
      pageCounter += books[i].numberOfPages
    }
    return pageCounter;
  }

  let main = document.querySelector('main')
  let h1 = document.createElement('h1')
  h1.innerHTML = `<h1>Total page count is: ${theCount(books)}</h1>`
  main.appendChild(h1);
}

