let api_key = "50f492eebb02834a770674f01f0cd7eb";
let url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`;

// "original_title": "Fight Club",
// "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
// "popularity": 48.822,
// "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
const carruselContainer = document.querySelector("#carruselContainer");

fetch(url)
  .then((res) => res.json())
  .then((res) => res.results)
  .then((pelis) => {
    content = `<div class="trending" style="background: url('https://image.tmdb.org/t/p/w500/${pelis[0]["poster_path"]}') no-repeat center" >
          <h3>${pelis[0]["original_title"]}</h3>
      </div>
      <div class="trending" style="background: url('https://image.tmdb.org/t/p/w500/${pelis[1]["poster_path"]}') no-repeat">
          <h3>${pelis[1]["original_title"]}</h3>
      </div>
      <div class="trending" style="background: url('https://image.tmdb.org/t/p/w500/${pelis[2]["poster_path"]}') no-repeat">
          <h3>${pelis[2]["original_title"]}</h3>
      </div>
      `;
    carruselContainer.innerHTML = content;
  });
