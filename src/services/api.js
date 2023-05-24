import axios from "axios";

export const getShowsApi = axios.get(`https://api.tvmaze.com/shows`);

export const getShowApi = (id = 1) =>
  axios.get(`https://api.tvmaze.com/shows/${id}`);

export const getShowPage = (page = 1) =>
  axios.get(`https://api.tvmaze.com/shows?page=${page}`);

export const getEpisodesApi = (id = 1) =>
  axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);

export const getSessionsApi = (id = 1) =>
  axios.get(`https://api.tvmaze.com/shows/${id}/seasons`);

export const getImagesApi = (id = 1) =>
  axios.get(`https://api.tvmaze.com/shows/${id}/images`);
