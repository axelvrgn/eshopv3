import axios from "axios";

const getAll = () => {
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: { key: "2f67919660e14d84ade60e3c149b38f9", page_size: 12 },
  };
  return axios.request(options);
};

const getByPage = (page) => {
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: {
      key: "2f67919660e14d84ade60e3c149b38f9",
      page: page,
      page_size: 12,
    },
  };
  return axios.request(options);
};

const getBySearch = (search, platform, genre) => {
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: {
      key: "2f67919660e14d84ade60e3c149b38f9",
      page_size: 21,
      search: search,
      search_exact: true,
      platforms: platform,
      genres: genre,
      ordered: "name",
    },
  };
  return axios.request(options);
};

const getDetails = (id) => {
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games/" + id,
    params: { key: "2f67919660e14d84ade60e3c149b38f9", page_size: 12 },
  };
  return axios.request(options);
};

export const gameService = {
  getAll,
  getByPage,
  getBySearch,
  getDetails,
};
