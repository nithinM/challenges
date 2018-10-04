import getTotalDonations from "../../util/getTotalDonations";
import payments from "../fixtures/payments";

describe("getTotalDonations", () => {
  test("should calculate total donations for no payments correctly", () => {
    const donations = [];
    expect(getTotalDonations(donations)).toBe("");
  });

  test("should calculate total donations for payments correctly", () => {
    const donations = payments;
    expect(getTotalDonations(donations)).toBe("80 THB");
  });
});
