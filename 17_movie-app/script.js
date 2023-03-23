const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6a8ce29f0140ad719d01c9fae7c16afc&page=1';

const IMG_PATH = 'https://image.tmbd.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=6a8ce29f0140ad719d01c9fae7c16afc&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log("Check", data.results)
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    // Clearing search value
    search.value = '';
  } else {
    window.location.reload()
  }
})