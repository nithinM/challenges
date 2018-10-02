import axios from "axios";

// SET_CHARITIES
export const setCharities = charities => ({
  type: "SET_CHARITIES",
  charities
});

export const startSetCharities = () => dispatch =>
  axios
    .get("http://localhost:3001/charities")
    .then(resp => dispatch(setCharities(resp.data)))
    .catch(error => {
      console.log(error); // eslint-disable-line
    });
