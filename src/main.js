import * as pixabay from './js/pixabay-api.js';
import * as render from './js/render-functions.js';

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const request = data.get('search-text');
    pixabay.getImagesByQuery(request)
    .then(images => {
        if(images.length === 0) {
            console.log("Sorry, there are no images matching your search query. Please try again!");
            return;
        }
        render.itemsTemplate(images);
    });
})