import axios from "axios";
import { apiUrl } from "../constants";

export default houseId =>
  axios.get(`${apiUrl}/houses/${houseId}`).then(({ data }) => {
    const members = data.swornMembers.map(url => axios.get(url));
    return axios
      .all(members)
      .then(membersData => membersData.map(memberData => memberData.data));
  });
