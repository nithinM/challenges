import React from "react";
import { connect } from "react-redux";
import { Column, Container, Row } from "react-rasta";
import styled from "styled-components";
import PropTypes from "prop-types";
import getTotalDonations from "../util/getTotalDonations";

const DonationWrapper = styled.div`
  margin: 0 auto 30px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #000000;
  color: #ffffff;
  text-align: center;
  padding-top: 25px;
`;

const DonationText = styled.p`
  font-weight: 600;
`;

const DonationAmount = styled.h2`
  font-weight: 800;
`;

const SmallText = styled.small`
  font-size: 12px;
`;

const TotalDonations = ({ donations }) => {
  const totalDonations = getTotalDonations(donations);
  return (
    <Container width={{ sm: 400, md: 600, lg: 800, xl: 1000 }}>
      <Row>
        <Column size={12}>
          <DonationWrapper>
            <DonationText>All Donations</DonationText>
            <DonationAmount>
              {totalDonations === "" ? (
                <SmallText>No donation</SmallText>
              ) : (
                totalDonations
              )}
            </DonationAmount>
          </DonationWrapper>
        </Column>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  donations: state.donations
});

TotalDonations.propTypes = {
  donations: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default connect(mapStateToProps)(TotalDonations);
