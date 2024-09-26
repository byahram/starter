import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    // api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    api_key: "11ddf22d9f842737f799d74032cf4628",
    language: "ko-KR",
  },
});

export default instance;
