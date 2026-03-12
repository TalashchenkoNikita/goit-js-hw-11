import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function itemTemplate(image) {
return `<li>
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}">
      </a>
      <ul class="stats">
        <li><span>likes</span><span>${image.likes}</span></li>
        <li><span>views</span><span>${image.views}</span></li>
        <li><span>comments</span><span>${image.comments}</span></li>
        <li><span>downloads</span><span>${image.downloads}</span></li>   
      </ul>
    </li>`;
}

export function itemsTemplate(items) {
  gallery.innerHTML = "";
  gallery.insertAdjacentHTML("beforeend", items.map(itemTemplate).join(''));
  lightbox.refresh();
}