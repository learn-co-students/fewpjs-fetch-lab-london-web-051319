function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(renderBooks);

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
})

//the character in the series by number

function fetchCharactersByNumber(number) {
  return fetch(`https://anapioficeandfire.com/api/characters/${number}`)
  .then(resp => resp.json())
  .then(json => console.log(json));
}

//total pages

function countPages(json) {
  let pages = 0;
  json.forEach(book => {
    pages += book["numberOfPages"];
    console.log(pages);
  })
}

function totalPages() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(countPages);
}

