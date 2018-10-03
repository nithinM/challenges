import React from "react";
import { Column, Container, Row } from "react-rasta";
import styled from "styled-components";

const HeadingOne = styled.h1`
  color: ${props => props.theme.primaryTextColor};
  text-align: center;
  padding: 40px 20px 0 20px;
`;

const Header = () => (
  <Container width={{ sm: 400, md: 600, lg: 800, xl: 1000 }}>
    <Row>
      <Column size={12}>
        <HeadingOne>Omise Tamboon React</HeadingOne>
      </Column>
    </Row>
  </Container>
);

export default Header;
