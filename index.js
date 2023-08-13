movieListEl = document.querySelector(".movie__list");
formSearch = document.querySelector(".form__search")
const testDiv = document.querySelector(".movie__block");
let search = [''] // assuming failed search, empty array

async function renderMovies(e) {
  try{
    e.preventDefault();
    console.log(document.body.classList)
    document.body.classList.toggle("loading")
    const movies = await fetch(`https://www.omdbapi.com/?apikey=11142a25&s=${formSearch.value}`);
    const moviesData = await movies.json();
    document.body.classList.toggle("loading");
    console.log(moviesData.Search);
    movieListEl.innerHTML = moviesData.Search.slice(0,6).map((movie) => moviesHTML(movie)).join("");
} catch (error) {
    console.log("error")
}
}


function outputFunction() {

  if (search.length < 1) {
    return (testDiv.innerHTML = errorHTML()); //can be a function that gets called
  } else {
    return (testDiv.innerHTML = renderMovies());
//can be a function
  }
}

outputFunction();

function errorHTML() {
  return `<div class="movie__block">
  <figure class="empty__img--wrapper">
      <img class="empty__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq3ytoVkdDuKo_iKa-pK_hWDXo37WACBjzcg&usqp=CAU" alt="" class="empty__img">
  </figure>
  <h1 class="help__txt">Search for Movies ex. Title, Keywords</h1>
  <h2 class="search__error--txt">Movie not found!</h2>
</div>`
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



// renderMovies();
