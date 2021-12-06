const cardContainer = document.querySelector("#card-container");
let api_key2 = "50f492eebb02834a770674f01f0cd7eb";
let url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key2}&language=en-US&region=US&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=1&year=2021&with_watch_monetization_types=free`;

fetch(url2)
  .then((res) => res.json())
  .then((res) => res.results)
  .then((pelis) => {
    content = "";
    pelis.forEach((peli) => {
      if(peli["poster_path"]){
      content += `
      <div class="card">
        <img
          class="card-img"
          src="https://image.tmdb.org/t/p/w500/${peli["poster_path"]}"
        />
  <div class="descript">
  <p class="titulo">${peli["original_title"].toUpperCase()}</p>
  <p class="texto">${peli["overview"].slice(0,100)}...</p>
  </div>
  </div>
  `;}
    });
    cardContainer.innerHTML = content;
  });
