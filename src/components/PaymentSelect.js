import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Payment from "./Payment";

const PaymentWrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: ${props => (props.open ? "1" : "0")};
  height: ${props => (props.open ? props.height : "0")};
  overflow: hidden;
  transition: all 0.3s;
`;

const PaymentContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  padding: 60px 20px 40px 20px;
  text-align: center;
`;

const PaymentClose = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  width: 16px;
  height: 16px;
  opacity: 0.3;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
    transform: rotate(180deg);
  }

  &:before {
    position: absolute;
    left: 8px;
    content: " ";
    height: 16px;
    width: 2px;
    background-color: #333;
    transform: rotate(45deg);
  }

  &:after {
    position: absolute;
    left: 8px;
    content: " ";
    height: 16px;
    width: 2px;
    background-color: #333;
    transform: rotate(-45deg);
  }
`;

const PaymentSelect = ({
  height,
  open,
  currency,
  handlePaymentClose,
  charityId
}) => (
  <PaymentWrapper open={open} height={height}>
    <PaymentContent>
      <PaymentClose onClick={handlePaymentClose} />
      <Payment
        currency={currency}
        charityId={charityId}
        onClick={handlePaymentClose}
        handlePaymentClose={handlePaymentClose}
      />
    </PaymentContent>
  </PaymentWrapper>
);

PaymentSelect.propTypes = {
  height: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  currency: PropTypes.string.isRequired,
  handlePaymentClose: PropTypes.func.isRequired,
  charityId: PropTypes.number.isRequired
};

export default PaymentSelect;
