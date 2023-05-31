import axios from "axios";

export const getShowsApi = axios.get(`https://api.tvmaze.com/shows`);

export const getAllShowsById = (page = 1) =>
  axios.get(`https://api.tvmaze.com/shows?page=${page}`);

export const getShow = (id = 1) =>
  axios.get(`https://api.tvmaze.com/shows/${id}`);

export const getEpisodesApi = (id = 1) =>
  axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);

export const getSeasonsApi = (id = 1) =>
  axios.get(`https://api.tvmaze.com/shows/${id}/seasons`);

export const getImagesApi = (id = 1) =>
  axios.get(`https://api.tvmaze.com/shows/${id}/images`);

export const searchShowsByNameApi = (name = "") =>
  axios.get(`https://api.tvmaze.com/search/shows?q=${name}`);

export const getNewReleasedShows = () =>
  axios.get(`https://api.tvmaze.com/schedule`);

export const getShowCrew = (id = 1) =>
  axios.get(`https://api.tvmaze.com/shows/${id}/crew`);

export const getShowCast = (id = 1) =>
  axios.get(`https://api.tvmaze.com/shows/${id}/cast`);
