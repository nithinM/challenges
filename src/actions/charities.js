import axios from "axios";
import apiEndPoints from "../config/apiEndPoints";

// SET_CHARITIES
export const setCharities = charities => ({
  type: "SET_CHARITIES",
  charities
});

export const startSetCharities = () => dispatch =>
  axios
    .get(`${apiEndPoints}charities`)
    .then(resp => dispatch(setCharities(resp.data)))
    .catch(error => {
      console.log(error); // eslint-disable-line
    });
