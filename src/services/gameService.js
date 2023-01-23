import axios from "axios";

const getAll = () => {
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: { key: "ee0a2d47b6b54dd3b649aaa653e174f3", page_size: 12 },
  };
  return axios.request(options);
};

const getByPage = (page, pageSize) => {
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: {
      key: "ee0a2d47b6b54dd3b649aaa653e174f3",
      page: page,
      page_size: pageSize,
      ordering: "rating",
    },
  };
  return axios.request(options);
};

const getBySearch = (search, platforms, genres) => {
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: {
      key: "ee0a2d47b6b54dd3b649aaa653e174f3",
      page_size: 21,
      search: search,
      platforms: platforms,
      genres: genres,
      ordered: "name",
    },
  };
  return axios.request(options);
};

const getDetails = (id) => {
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games/" + id,
    params: { key: "ee0a2d47b6b54dd3b649aaa653e174f3", page_size: 12 },
  };
  return axios.request(options);
};

export const gameService = {
  getAll,
  getByPage,
  getBySearch,
  getDetails,
};
