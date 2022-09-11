console.log('Website is loaded....');

const authorBookForm = document.querySelector('form');
const authorBookInput = document.querySelector('input');
const authorBookId = document.querySelector('#author-book-id');


authorBookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    authorBookId.textContent = 'Loading data...';

    fetch(`/author/${authorBookInput.value}/books`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                response.send({ status: 500, message: `Server error`});
                console.log(data.error);
            } else {
                authorBookId.innerHTML = JSON.stringify(data.author_books, null, 4);

            }
        });
    });
});
