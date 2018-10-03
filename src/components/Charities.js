import React from "react";
import { connect } from "react-redux";
import { Container, Row } from "react-rasta";
import PropTypes from "prop-types";
import CharityItem from "./CharityItem";
import Alert from "./common/Alert";

export const Charities = ({ charities }) => (
  <Container width={{ sm: 400, md: 600, lg: 800, xl: 1000 }}>
    <Row>
      {charities.map(charity => (
        <CharityItem
          name={charity.name}
          image={charity.image}
          currency={charity.currency}
          id={charity.id}
          key={charity.id}
        />
      ))}
    </Row>
    <Alert />
  </Container>
);

const mapStateToProps = state => ({
  charities: state.charities
});

Charities.propTypes = {
  charities: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default connect(mapStateToProps)(Charities);
