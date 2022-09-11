console.log('Website is loaded....');

const authorEventForm = document.querySelector('form');
const authorEventInput = document.querySelector('input');
const authorEventId = document.querySelector('#author-event-id');




authorEventForm.addEventListener('submit', (event) => {
    event.preventDefault();

    authorEventId.textContent = 'Loading data...';

    fetch(`/author/${authorEventInput.value}/events`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                response.send({ status: 500, message: `Server error`});
                console.log(data.error);
            } else {

                authorEventId.innerHTML = JSON.stringify(data.author_events, null, 4);
            }
        });
    });
});
