movieListEl = document.querySelector(".movie__list");

async function main() {
  const movies = await fetch("https://www.omdbapi.com/?apikey=11142a25&s=fast");
  const moviesData = await movies.json();
  console.log(moviesData.Search);
  movieListEl.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("");
}

function browsingMovies(event){
	localStorage.setItem("key", event.target.search.value);
}

function moviesHTML(movie) {
  return `div class="movies">
    <div class="movie-card">
      <div class="movie-card__container">
        <figure class="movie__img--wrapper">
          <img
            class="movie__img"
            src="${movie.poster}"
            alt=""
          />
        </figure>
        <h3 class="movie__title">${movie.title}:</h3>
        <p><b>Release Date:</b>${movie.year}</p>
      </div>
    </div>
  </div>`;
}

main();
