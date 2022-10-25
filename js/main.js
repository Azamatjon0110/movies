const elList = document.querySelector(".js-movie-list");
const elTempMovie = document.querySelector(".item-temp").content;
const elTemplateFragment = document.createDocumentFragment();

for (const film of kinolar) {
  const tempfrag = elTempMovie.cloneNode(true);
  tempfrag.querySelector(".js-title").textContent = film.title;
  tempfrag.querySelector(".js-year").textContent = film.year
  tempfrag.querySelector(".js-cast").textContent = film.cast.join(", ");
  tempfrag.querySelector(".js-genres").textContent = film.genres.join(", ");
  elTemplateFragment.appendChild(tempfrag);
}

elList.appendChild(elTemplateFragment);