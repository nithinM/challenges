import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const RadioInput = styled.input.attrs({
  type: "radio"
})`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  &:checked + label,
  &:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: ${props => props.theme.primaryTextColor};
  }
  &:checked + label:before,
  &:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid ${props => props.theme.radioBoarder};
    border-radius: 100%;
    background: ${props => props.theme.radioBg};
  }
  &:checked + label:after,
  &:not(:checked) + label:after {
    content: "";
    width: 12px;
    height: 12px;
    background: ${props => props.theme.radioSelectBg};
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  &:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  &:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

const RadioButton = ({ id, label, value, name, onChange }) => (
  <React.Fragment>
    <RadioInput value={value} id={id} name={name} onChange={onChange} />
    <label htmlFor={id}>{label}</label>
  </React.Fragment>
);

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioButton;
