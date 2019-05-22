import axios from "axios";

export default () => {
  const token = localStorage.getItem("jwt");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
};

