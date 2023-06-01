import { createSlice } from "@reduxjs/toolkit";

const sliceName = "favoriteShowsSlice";

const initialState = [
  {
    id: 49964,
    url: "https://www.tvmaze.com/shows/49964/invasion",
    name: "Invasion",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Science-Fiction"],
    status: "Running",
    runtime: null,
    averageRuntime: 51,
    premiered: "2021-10-22",
    ended: null,
    officialSite:
      "https://tv.apple.com/us/show/invasion/umc.cmc.70b7z97fv7azfzn5baqnj88p6?ctx_brand=tvs.sbd.4000",
    schedule: {
      time: "",
      days: ["Friday"],
    },
    rating: {
      average: 6.3,
    },
    weight: 100,
    network: null,
    webChannel: {
      id: 310,
      name: "Apple TV+",
      country: null,
      officialSite: "https://tv.apple.com/",
    },
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 404492,
      imdb: "tt9737326",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/359/899785.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/359/899785.jpg",
    },
    summary:
      "<p>Earth is visited by an alien species that threatens humanity's existence. Events unfold in real time through the eyes of five ordinary people across the globe as they struggle to make sense of the chaos unraveling around them.</p>",
    updated: 1679330820,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/49964",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2109312",
      },
    },
  },
  {
    id: 37500,
    url: "https://www.tvmaze.com/shows/37500/spider-woman-agent-of-sword",
    name: "Spider-Woman, Agent of S.W.O.R.D.",
    type: "Animation",
    language: "English",
    genres: ["Action", "Adventure"],
    status: "Ended",
    runtime: 10,
    averageRuntime: 10,
    premiered: "2009-08-19",
    ended: "2009-10-14",
    officialSite: null,
    schedule: {
      time: "",
      days: ["Wednesday"],
    },
    rating: {
      average: null,
    },
    weight: 72,
    network: null,
    webChannel: {
      id: 47,
      name: "iTunes",
      country: null,
      officialSite: null,
    },
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 121901,
      imdb: "tt1673449",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/159/399833.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/159/399833.jpg",
    },
    summary:
      "<p>Ask yourself this, if the pages of Marvel Comics could move, what would they look like? Wonder no more, True Believers! Remaining true to the heritage of panel-by-panel graphic storytelling, boasting groundbreaking graphics, sensational soundscapes and, of course, the explosiveness of the Mighty Marvel Universe, here comes the all-new, all-awesome Spider-Woman, Agent of S.W.O.R.D!</p>",
    updated: 1530595223,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/37500",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/1489542",
      },
    },
  },
  {
    id: 40020,
    url: "https://www.tvmaze.com/shows/40020/i-am-not-okay-with-this",
    name: "I Am Not Okay With This",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Romance", "Supernatural"],
    status: "Ended",
    runtime: null,
    averageRuntime: 23,
    premiered: "2020-02-26",
    ended: "2020-02-26",
    officialSite: "https://www.netflix.com/title/80244781",
    schedule: {
      time: "",
      days: [],
    },
    rating: {
      average: 7.7,
    },
    weight: 96,
    network: null,
    webChannel: {
      id: 1,
      name: "Netflix",
      country: null,
      officialSite: "https://www.netflix.com/",
    },
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 375998,
      imdb: "tt9446688",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/240/601959.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/240/601959.jpg",
    },
    summary:
      "<p><b>I Am Not Okay With This</b> is a coming of age story about a teenage girl navigating the trials and tribulations of high school, all the while dealing with the complexities of her family, her budding sexuality, and... mysterious superpowers just beginning to awaken from deep within her.</p>",
    updated: 1628754076,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/40020",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/1793061",
      },
    },
  },
  {
    id: 38913,
    url: "https://www.tvmaze.com/shows/38913/warrior-nun",
    name: "Warrior Nun",
    type: "Scripted",
    language: "English",
    genres: ["Action", "Fantasy", "Supernatural"],
    status: "Ended",
    runtime: null,
    averageRuntime: 44,
    premiered: "2020-07-02",
    ended: "2022-11-10",
    officialSite: "https://www.netflix.com/title/80242724",
    schedule: {
      time: "",
      days: [],
    },
    rating: {
      average: 7.4,
    },
    weight: 98,
    network: null,
    webChannel: {
      id: 1,
      name: "Netflix",
      country: null,
      officialSite: "https://www.netflix.com/",
    },
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 382544,
      imdb: "tt9059350",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/261/654641.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/261/654641.jpg",
    },
    summary:
      "<p>Inspired by the Manga novels, <b>Warrior Nun</b> revolves around a 19 year-old woman who wakes up in a morgue with a new lease on life and a divine artifact embedded in her back. She discovers she is now part of an ancient order that has been tasked with fighting demons on Earth, and powerful forces representing both heaven and hell want to find and control her.</p>",
    updated: 1672283426,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/38913",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2416863",
      },
    },
  },
];

export const favoriteShowsSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    addFavoriteShow: (state, action) => {
      let arr = [];
      state.forEach((show) => {
        arr.push(show.id);
      });
      if (!arr.includes(action.payload.id)) return [...state, action.payload];
    },
    removeFavoriteShow: (state, action) => {
      return state.filter((show) => show.id !== action.payload.id);
    },
  },
});

export const favoriteShowsReducers = favoriteShowsSlice.reducer;
export const { addFavoriteShow, removeFavoriteShow } =
  favoriteShowsSlice.actions;
