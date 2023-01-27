import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';
console.log(galleryItems);

const galleryListRef = document.querySelector(".gallery");

function createImagesCardsMarkup(images) {
  return images
  .map
  ((image) =>
      `<div class="gallery__item">
       <a class="gallery__link" href="${image.original}">
       <img
         class="gallery__image"
         src="${image.preview}"
         data-source="${image.original}"
         alt="${image.description}"
       />
     </a>
   </div>`
  )
  .join(" ")
}

const galaryMarkup = createImagesCardsMarkup(galleryItems)
galleryListRef.insertAdjacentHTML("beforeend", galaryMarkup);