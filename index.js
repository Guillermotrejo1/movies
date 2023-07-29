movieListEl = document.querySelector(".movie__list");


async function renderMovies() {
  document.body.classlist += (" loading")
  const movies = await fetch(`https://www.omdbapi.com/?apikey=11142a25&s=harry`);
  document.body.classlist.remove("loading")
  const moviesData = await movies.json();
  console.log(moviesData.Search);
  movieListEl.innerHTML = moviesData.Search.slice(0,6).map((movie) => moviesHTML(movie)).join("");
}

function browsingMovies(event){
	localStorage.setItem("key", event.target.search.value);
}



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
