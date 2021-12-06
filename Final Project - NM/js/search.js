let api_key3 = "50f492eebb02834a770674f01f0cd7eb";
let searchContainer = document.querySelector("#search-container");

// Get the input field
let input = document.getElementById("search-box");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("search-btn").click();
  }
});

function getSearch() {
  let query = document.querySelector("#search-box").value;
  let url3 = `https://api.themoviedb.org/3/search/movie?api_key=${api_key3}&language=en-US&query=${query}&page=1&include_adult=false`;

  fetch(url3)
    .then((res) => res.json())
    .then((res) => res.results)
    .then((pelis) => {
      content = `<h2 class='searchResults'>Search Results for "${query.toUpperCase()}"</h2>`;
      pelis.forEach((peli) => {
        if (peli["poster_path"]) {
          content += `
      <div class="card">
        <img
          class="card-img"
          src="https://image.tmdb.org/t/p/w500/${peli["poster_path"]}"
        />
  <div class="descript">
  <p class="titulo">${peli["original_title"].toUpperCase()}</p>
  </div>
  </div>
  `;
        }
      });
      searchContainer.innerHTML = content;
      searchContainer.scrollIntoView();
    });
}
