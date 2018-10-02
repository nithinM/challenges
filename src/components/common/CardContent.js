import styled from "styled-components";

const CardContent = styled.div`
  display: flex;
  height: ${props => (props.height ? props.height : "75px")};
  width: 100%;
  padding: 0 20px;
  align-items: center;
`;

export default CardContent;
