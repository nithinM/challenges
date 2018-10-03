import React from "react";
import { Column } from "react-rasta";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "./common/Card";
import CardMedia from "./common/CardMedia";
import CardContent from "./common/CardContent";
import Button from "./common/Button";
import PaymentSelect from "./PaymentSelect";

const CharityTitle = styled.div`
  width: 75%;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.primaryTextColor};
`;

const CharityAction = styled.div`
  width: 25%;
  text-align: right;
  position: relative;
  z-index: 1;
`;

class CharityItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPayment: false };
  }

  handleDonateClick = () => {
    const { showPayment } = this.state;
    this.setState({ showPayment: !showPayment });
  };

  handlePaymentClose = () => {
    this.setState({ showPayment: false });
  };

  render() {
    const { image, name, currency, id } = this.props;
    const { showPayment } = this.state;
    return (
      <Column size={{ sm: 12, lg: 6 }}>
        <Card height="350px">
          <CardMedia image={image} height="275px" />
          <PaymentSelect
            height={showPayment ? "275px" : "0px"}
            open={showPayment}
            currency={currency}
            handlePaymentClose={this.handlePaymentClose}
            charityId={id}
          />
          <CardContent height="75px">
            <CharityTitle>{name}</CharityTitle>
            <CharityAction>
              {!showPayment && (
                <Button onClick={this.handleDonateClick}>Donate</Button>
              )}
            </CharityAction>
          </CardContent>
        </Card>
      </Column>
    );
  }
}

CharityItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default CharityItem;
