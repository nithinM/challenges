import React from "react";
import { ThemeProvider } from "styled-components";
import LightTheme from "./theme/light";
import Header from "./components/Header";
import Charities from "./components/Charities";
import TotalDonations from "./components/TotalDonations";

const App = () => (
  <ThemeProvider theme={LightTheme}>
    <React.Fragment>
      <Header />
      <TotalDonations />
      <Charities />
    </React.Fragment>
  </ThemeProvider>
);

export default App;
