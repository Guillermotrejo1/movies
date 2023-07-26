
const movieListEl = document.querySelector('.movie__list');
const searchKey = localStorage.getItem("key");

async function main(search){
	document.body.classlist += (" movies__loading")
	const movies = await fetch(`https://www.omdbapi.com/?apikey=f5504bbb&s=${search}&plot=full`);
	const moviesData = await movies.json();
	console.log(moviesData.Search)

	if(search === null) {
		movieListEl.innerHTML = browseErrorHTML(null);
	}
	else if(moviesData.Response == 'False'){
		movieListEl.innerHTML = browseErrorHTML(moviesData.Error, search);
	}
	else {
		movieListEl.innerHTML = moviesData.Search.slice(0,8).map((movie) => movieHTML(movie)).join("");
	}
	document.body.classlist.remove("movies__loading")
}

// function browse(event){
// 	event.preventDefault();
// 	const keyword = event.target.search.value;
// 	main(keyword);
// }

function movieHTML(movie) {
	return `
	<div class="movie">
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

function browseErrorHTML(error, search){
	if (error === null) {
		return `
			<div class="browse__empty">
				<figure class="browse__img--wrapper">
					<img src="./assets/browse.svg" alt="" class="browse__img">
				</figure>
				<h1 class="browse__text">Search For Movies, ex. Title, keywords</h1>
			</div>
	`
	}
	return `
			
			<div class="browse__empty">
				<figure class="browse__img--wrapper">
					<img src="./assets/browse.svg" alt="" class="browse__img">
				</figure>
				<h1 class="browse__text">Search For Movies, ex. Title, keywords</h1>
				<h1 class="browse__text">"${search}" ${error}</h1>
			</div>
	`
}

main(searchKey);