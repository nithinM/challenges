import axios from "axios";
import apiEndPoints from "../config/apiEndPoints";

export const addDonation = donation => ({
  type: "ADD_DONATION",
  donation
});

export const startAddDonation = (donationData = {}) => dispatch => {
  const { charitiesId = "", amount = 0, currency = "" } = donationData;
  const donation = { charitiesId, amount, currency };

  return axios
    .post(`${apiEndPoints}payments`, {
      ...donation
    })
    .then(() => {
      dispatch(
        addDonation({
          ...donation
        })
      );
    })
    .catch(error => {
      console.log(error); // eslint-disable-line
    });
};

export const setDonations = donations => ({
  type: "SET_DONATIONS",
  donations
});

export const startSetDonations = () => dispatch =>
  axios
    .get(`${apiEndPoints}payments`)
    .then(resp => dispatch(setDonations(resp.data)))
    .catch(error => {
      console.log(error); // eslint-disable-line
    });
