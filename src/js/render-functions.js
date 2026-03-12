import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function itemTemplate(image) {
return `<li class="gallery-item">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}">
      </a>
      <ul class="stats">
        <li class="stats-item"><p>likes</p><p>${image.likes}</p></li>
        <li class="stats-item"><p>views</p><p>${image.views}</p></li>
        <li class="stats-item"><p>comments</p><p>${image.comments}</p></li>
        <li class="stats-item"><p>downloads</p><p>${image.downloads}</p></li>   
      </ul>
    </li>`;
}

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    loader.style.display = 'block';
}

export function hideLoader() {
    loader.style.display = 'none';
}

export function createGallery(items) {
  hideLoader();
  gallery.insertAdjacentHTML("beforeend", items.map(itemTemplate).join(''));
  lightbox.refresh();
}