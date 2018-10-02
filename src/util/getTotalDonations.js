import abbreviate from "number-abbreviate";

const getTotalDonations = donations => {
  if (donations.length > 0) {
    const totalDonations = donations.reduce((accumulator, currentValue) => ({
      amount: accumulator.amount + currentValue.amount,
      currency: currentValue.currency
    }));
    return `${abbreviate(totalDonations.amount, 2)} ${totalDonations.currency}`;
  } else {
    return 0;
  }
};

export default getTotalDonations;
