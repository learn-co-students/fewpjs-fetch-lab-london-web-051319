function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(booksData => booksData.json())
    .then(json => renderBooks(json))
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
  renderFifth(json)
  totalnumberOfPages(json)
}

function renderFifth(json) {
  const main = document.querySelector('main')
  const h3 = document.createElement('h3')
  h3.innerHTML = `<h3>${json[4].name}</h3>`
  main.appendChild(h3)
};

function totalnumberOfPages(json) {
  const main = document.querySelector('main')
  const total = []
  json.forEach(book => {
    const pages = book.numberOfPages
    total.push(pages)
  }) 

  const finalTotal = total.reduce( function(total, bookPages){
    return total+bookPages
  }, 0);

  const h4 = document.createElement('h4')
  h4.innerHTML = `<h4>${finalTotal}</h4>`
  main.appendChild(h4)
};

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})


