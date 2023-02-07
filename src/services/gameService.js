import axios from "axios";

const getAll = () => {
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: { key: "ee0a2d47b6b54dd3b649aaa653e174f3", page_size: 12 },
  };
  return axios.request(options);
};

const getByPage = (page, pageSize, genres, platforms) => {
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: {
      key: "ee0a2d47b6b54dd3b649aaa653e174f3",
      page: page,
      page_size: pageSize,
    },
  };

  if (genres !== "") {
    options.params = {
      key: "ee0a2d47b6b54dd3b649aaa653e174f3",
      page: page,
      page_size: pageSize,
      genres: genres,
    };
  }
  if (platforms !== "") {
    options.params = {
      key: "ee0a2d47b6b54dd3b649aaa653e174f3",
      page: page,
      page_size: pageSize,
      platforms: platforms,
    };
  }
  if (genres !== "" && platforms !== "") {
    options.params = {
      key: "ee0a2d47b6b54dd3b649aaa653e174f3",
      page: page,
      page_size: pageSize,
      genres: genres,
      platforms: platforms,
    };
  }
  return axios.request(options);
};

const getBySearch = (search) => {
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: {
      key: "ee0a2d47b6b54dd3b649aaa653e174f3",
      page_size: 12,
      search: search,
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
