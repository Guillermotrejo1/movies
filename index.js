movieListEl = document.querySelector(".movie__list");
formSearch = document.querySelector(".form__search")


async function renderMovies(e) {
  e.preventDefault();
  console.log(document.body.classList)
  document.body.classList.toggle("loading")
  const movies = await fetch(`https://www.omdbapi.com/?apikey=11142a25&s=${formSearch.value}`);
  const moviesData = await movies.json();
  document.body.classList.toggle("loading");
  console.log(moviesData.Search);
  movieListEl.innerHTML = moviesData.Search.slice(0,6).map((movie) => moviesHTML(movie)).join("");
}

// function browsingMovies(event){
// 	localStorage.setItem("key", event.target.search.value);
// }



function moviesHTML(movie) {
  return `<div class="movie">
  <figure class="movie__img--wrapper">
      <img class="movie__img" src="${movie.Poster}" alt="">
  </figure>
  <div class="movie__title">
      ${movie.Title}
  </div>
  <div class="movie__year">
      ${movie.Year}
  </div>
</div>
`;
}



renderMovies();
