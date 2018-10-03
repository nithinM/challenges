import styled from "styled-components";

const CardMedia = styled.div`
  display: block;
  height: ${props => (props.height ? props.height : "275px")};
  background: url("../images/${props => props.image}") no-repeat center;
  background-size: cover;
  border-radius: 4px 4px 0 0;
`;

export default CardMedia;
