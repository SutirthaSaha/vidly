import http from "./httpService";
import config from "../config.json";

export function getMovies() {
  return http.get(config.movieApiEndPoint);
}

export function getMovie(id) {
  return http.get(config.movieApiEndPoint + "/" + id);
}

export function saveMovie(movie) {
  if (movie._id) {
    const id = movie._id;
    delete movie._id;
    return http.put(config.movieApiEndPoint + "/" + id, movie);
  }
  return http.post(config.movieApiEndPoint, movie);
}

export function deleteMovie(id) {
  return http.delete(config.movieApiEndPoint + "/" + id);
}
