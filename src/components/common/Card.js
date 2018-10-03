import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 4px;
  display: inline-block;
  height: ${props => (props.height ? props.height : "350px")};
  margin: 20px 0;
  position: relative;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export default Card;
