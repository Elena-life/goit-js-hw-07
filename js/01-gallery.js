import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const listGallery = document.querySelector(".gallery");

const groupImages = listGalleryItems(galleryItems);

listGallery.insertAdjacentHTML("beforeend", groupImages);
listGallery.addEventListener("click", onImgCardsClick);

function listGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
  <img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
  />
  </a>
  </div>`
    )
    .join("");
}

function onImgCardsClick(e) {
  e.preventDefault();
  const modelCards = e.target.classList.contains("gallery__image");
  if (!modelCards) {
    return;
  }

  const modelImagesCard = e.target;

  const modal = basicLightbox.create(
    `<img src="${modelImagesCard.dataset.source}">`);
  modal.show(() => {
    window.addEventListener("keydown", (e) => {
      const esc = e.code === "Escape";

      if (esc) {
        modal.close();
      }
    });
  });
}
listGallery.addEventListener("click", onImgCardsClick);
