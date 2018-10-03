import styled from "styled-components";

const Button = styled.button.attrs({
  type: props => (props.type ? props.type : "button")
})`
  background: transparent;
  display: inline-block;
  position: relative;
  color: ${props => props.theme.primaryButtonColor};
  padding: 5px 10px;
  border: 2px solid ${props => props.theme.primaryButtonBorder};
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    background: ${props => props.theme.primaryButtonHoverBg};
  }

  &:hover {
    color: ${props => props.theme.primaryButtonHoverColor};
  }
  &:hover::after {
    width: 100%;
  }

  &:focus {
    color: ${props => props.theme.primaryButtonHoverColor};
  }
  &:focus::after {
    width: 100%;
  }
`;

export default Button;
