const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=dec33388"; // Replace with your OMDb API key
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (searchTerm) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}`);
    const data = await response.json();
    return data.Search || []; // Return an empty array if no results
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

