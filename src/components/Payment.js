import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import { startAddDonation, startSetDonations } from "../actions/donations";
import { setAlert } from "../actions/alert";
import { PaymentAmounts } from "../config/paymentAmounts";
import RadioButton from "./common/RadioButton";
import Button from "./common/Button";

const TitleText = styled.p`
  text-align: center;
  font-weight: 600;
`;

const InlineElement = styled.div`
  display: inline-block;
  margin: 20px 7px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: block;
  padding: 20px;
`;

class Payment extends React.Component {
  constructor() {
    super();
    this.state = {
      charityId: "",
      amount: 0,
      currency: ""
    };
  }

  generatePaymentRadioButton = () => {
    const { charityId } = this.props;
    return PaymentAmounts.map(payAmount => (
      <InlineElement key={`${payAmount}-${charityId}`}>
        <RadioButton
          id={`amount_${payAmount}-${charityId}`}
          label={payAmount}
          value={payAmount}
          name={`payment-group-${charityId}`}
          charityId={charityId}
          onChange={this.handleOnChange}
        />
      </InlineElement>
    ));
  };

  handleOnChange = e => {
    const { charityId, currency } = this.props;
    const amount = parseInt(e.target.value, 10);
    this.setState({
      charityId,
      amount,
      currency
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { charityId, amount, currency } = this.state;
    const {
      handlePaymentClose,
      startAddDonation: fnStartAddDonation,
      startSetDonations: fnStartSetDonations,
      setAlert: fnSetAlert
    } = this.props;
    // Trigger Add Donation action
    fnStartAddDonation({ charitiesId: charityId, amount, currency }).then(
      () => {
        // Trigger success payment alert
        fnSetAlert({
          show: true,
          title: "Thank you!",
          message: `Your donation of ${amount} ${currency} received.`,
          type: "success"
        });
        // Trigger payment panel close
        handlePaymentClose();
        fnStartSetDonations();
      }
    );
  };

  render() {
    const { currency } = this.props;
    return (
      <React.Fragment>
        <TitleText>Select the amount to donate ({currency})</TitleText>
        <form onSubmit={this.handleSubmit}>
          {this.generatePaymentRadioButton()}
          <ButtonWrapper>
            <Button type="submit">Pay</Button>
          </ButtonWrapper>
        </form>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddDonation: donation => dispatch(startAddDonation(donation)),
  startSetDonations: () => dispatch(startSetDonations()),
  setAlert: alert => dispatch(setAlert(alert))
});

Payment.propTypes = {
  charityId: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  startAddDonation: PropTypes.func.isRequired,
  startSetDonations: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  handlePaymentClose: PropTypes.func.isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(Payment);
