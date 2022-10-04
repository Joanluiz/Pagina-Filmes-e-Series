import axios from "axios";

export const moviesApi = axios.create({
	baseURL:
		"https://api.themoviedb.org/3/movie/popular?api_key=52460cb453458e84f6b577c430c6eaf8&language=pt-BR&page=1",
});

export const tvApi = axios.create({
	baseURL:
	"https://api.themoviedb.org/3/tv/popular?api_key=52460cb453458e84f6b577c430c6eaf8&language=pt-BR&page=1",
});