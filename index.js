// movieListEl = document.querySelector(".movie__list");
// formSearch = document.querySelector(".form__search")
// const testDiv = document.querySelector(".movie__block");
// let search = [''] // assuming failed search, empty array

// async function renderMovies(e) {
//   try{
//     e.preventDefault();
//     console.log(document.body.classList)
//     document.body.classList.toggle("loading")
//     const movies = await fetch(`https://www.omdbapi.com/?apikey=11142a25&s=${formSearch.value}`);
//     const moviesData = await movies.json();
//     document.body.classList.toggle("loading");
//     console.log(moviesData.Search);
//     movieListEl.innerHTML = moviesData.Search.slice(0,6).map((movie) => moviesHTML(movie)).join("");
// } catch (error) {
//     console.log("error")
// }
// }



// function errorHTML() {
//   return `<div class="movie__block">
//   <figure class="empty__img--wrapper">
//       <img class="empty__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq3ytoVkdDuKo_iKa-pK_hWDXo37WACBjzcg&usqp=CAU" alt="" class="empty__img">
//   </figure>
//   <h1 class="help__txt">Search for Movies ex. Title, Keywords</h1>
//   <h2 class="search__error--txt">Movie not found!</h2>
// </div>`
// }


// function moviesHTML(movie) {
//   return `<div class="movie">
//   <figure class="movie__img--wrapper">
//       <img class="movie__img" src="${movie.Poster}" alt="">
//   </figure>
//   <div class="movie__title">
//       ${movie.Title}
//   </div>
//   <div class="movie__year">
//       ${movie.Year}
//   </div>
// </div>
// `;
// }



// // renderMovies();

movieListEl = document.querySelector(".movie__list");
formSearch = document.querySelector(".form__search");
testDiv = document.querySelector(".movie__block");

async function renderMovies(event) {
  event.preventDefault(event);
  document.body.classList.toggle("loading");
  const data = await fetch(
    `https://www.omdbapi.com/?apikey=11142a25&s=${formSearch.value}`
  );
  document.body.classList.toggle("loading");
  const moviesData = await data.json();

  // mappedData = moviesData.Search.map((item) => item);
  // console.log(mappedData);
  // console.log(movieListEl);

  if (moviesData && moviesData.Search) {
    movieListEl.innerHTML = moviesData.Search.slice(0, 6)
      .map((item) => {
        return `<div class="movie">
      <figure class="movie__img--wrapper">
      <img class="movie__img" src="${item.Poster}" alt="">
      </figure>
      <div class="movie__title">
      ${item.Title}
      </div>
      <div class="movie__year">
      ${item.Year}
      </div>
      </div>
      `;
      })
      .join("");
  } else {
    movieListEl.innerHTML =  `<div class="movie__block" 
      >
        <figure class="empty__img--wrapper">
          <img
            class="empty__img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq3ytoVkdDuKo_iKa-pK_hWDXo37WACBjzcg&usqp=CAU"
            alt=""
            class="empty__img"
          />
        </figure>
        <h1 class="help__txt">Search for Movies ex. Title, Keywords</h1>
        <h2 class="search__error--txt">Movie not found!</h2>
      </div>`;
      }
}
 renderMovies()