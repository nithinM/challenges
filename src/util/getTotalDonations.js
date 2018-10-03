import abbreviate from "number-abbreviate";

const getTotalDonations = donations => {
  let totalAmount = "";
  if (donations.length > 0) {
    const totalDonations = donations.reduce((accumulator, currentValue) => ({
      amount: accumulator.amount + currentValue.amount,
      currency: currentValue.currency
    }));
    totalAmount = `${abbreviate(totalDonations.amount, 2)} ${
      totalDonations.currency
    }`;
  }

  return totalAmount;
};

export default getTotalDonations;
