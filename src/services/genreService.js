import axios from "axios";

const getAll = () => {
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/genres",
    params: { key: "2f67919660e14d84ade60e3c149b38f9", page_size: 12 },
  };
  return axios.request(options);
};

export const genreService = {
  getAll,
};
