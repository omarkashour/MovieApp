const API_KEY = "your_api_key_here"
const BASE_URL = "https://api.themoviedb.org/3/"

export const getPopularMovies = async () =>{

  const response = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

export const searchMovies = async (query: string) =>{
  const response = await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results;
}