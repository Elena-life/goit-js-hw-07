import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listGallery = document.querySelector(".gallery");

const groupImages = listGalleryItems(galleryItems);

listGallery.insertAdjacentHTML("beforeend", groupImages);

function listGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
    `<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
    </a>`
    )
    .join("");
}

new SimpleLightbox(".gallery__link ", {
  captionsData: "alt",
  captionDelay: "250",
  enableKeyboard: "true",
});