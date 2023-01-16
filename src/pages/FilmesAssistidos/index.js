const omdbApiKey = "ba12fd4f";

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
	btn.classList.toggle("open");
	nav.classList.toggle("flex");
	nav.classList.toggle("hidden");
});

function addWatchedMovie(email) {
	let movieInput = document.getElementById("watched-movie-input");
	fetch(
		`http://www.omdbapi.com/?t=` +
			movieInput.value +
			`&apikey=` +
			omdbApiKey
	)
		.then((response) => response.json())
		.then((movieData) => {
			if (movieData.Response) {
				updateWatchedMovies(email, movieData.Title, movieData.imdbID);
			} else {
				console.log("nao achou");
			}
		});
}

function updateWatchedMovies(email, movieTitle, movieId) {
	console.log(email, movieTitle, movieId);
	fetch("../../data/users_db.json").then((response) => {
		response.json().then((dados) => {
			idUser = getIdbyEmail(dados.users, email);
			const newMovie = {
				title: movieTitle,
				id: movieId,
			};

			dados.users[idUser].watchedMovies.push(newMovie);

			console.log(dados);
			const jsonData = JSON.stringify(dados);
			console.log(jsonData);
		});
	});
}

function displayWatchedMovies(email) {
	let divWatchedMovies = document.querySelector("#watchedMoviesList");

	fetch("../../data/users_db.json").then((response) => {
		response.json().then((dados) => {
			idUser = getIdbyEmail(dados.users, email);
			watchedMovies = dados.users[idUser].watchedMovies;
			watchedMovies.map((movie) => {
				fetch(
					`http://www.omdbapi.com/?i=` +
						movie.id +
						`&apikey=` +
						omdbApiKey
				)
					.then((response) => response.json())
					.then((movieData) => {
						var posterLink = movieData.Poster;
						divWatchedMovies.innerHTML += `
                    <div class="w-1/4 p-4">
                        <div class="image-wrapper">
                            <img class="w-full " src="${posterLink}">
                            <div class="gradient-overlay"></div>
                            <button class="image-button"><i class="fa-solid fa-lg fa-circle-xmark"></i></button>
                        </div>
                        <p class="text-center text-lg"> ${movie.title} </p>
                    </div>
                    `;
					});
			});
		});
	});
}

function getIdbyEmail(usersList, email) {
	for (let i = 0; i < usersList.length; i++) {
		if (usersList[i].email == email) {
			return i;
		}
	}
}
