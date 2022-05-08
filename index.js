function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
  .then( r => r.json() )
  .then( books => {
     renderBooks( books)
})
  
};


// const renderBooks = books => {}

const renderBooks = books => books.forEach( renderSingle); 

const renderSingle = book => {
    const main = document.querySelector('main');
    const liElement = document.createElement('li');
    liElement.textContent = book.name;
    main.appendChild(liElement);
  };


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
