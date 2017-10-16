import axios from "axios";
import { apiUrl } from "../constants";

export default page =>
  axios.get(`${apiUrl}/houses?page=${page + 1}`).then(({ data, headers }) => {
    const pages = headers.link
      .split(",")
      .pop()
      .match(/page=([\d]+)/)[1];
    return {
      pages,
      data
    };
  });
