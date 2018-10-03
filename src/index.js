import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";
import configureStore from "./store/configureStore";
import { startSetCharities } from "./actions/charities";
import { startSetDonations } from "./actions/donations";
import App from "./App";

/* eslint-disable */
injectGlobal`
  ${styledNormalize} 
  body {
    background: url("../images/gplay.png") repeat;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
  }
  * {
    box-sizing: border-box;
  }
`;
/* eslint-enable */

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

let loadingCharityData = true;
let loadingDonationData = true;

const renderApp = () => {
  if (!loadingCharityData && !loadingDonationData) {
    ReactDOM.render(jsx, document.getElementById("root"));
  }
};

store.dispatch(startSetCharities()).then(() => {
  loadingCharityData = false;
  renderApp();
});

store.dispatch(startSetDonations()).then(() => {
  loadingDonationData = false;
  renderApp();
});
