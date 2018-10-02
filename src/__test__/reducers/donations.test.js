import donationsReducer from "../../reducers/donations";
import payments from "../fixtures/payments";

describe("donationsReducer", () => {
  test("should setup default donations value", () => {
    const action = { type: "@@INIT" };
    const state = donationsReducer(undefined, action);

    expect(state).toEqual([]);
  });

  test("should set donations", () => {
    const action = {
      type: "SET_DONATIONS",
      donations: payments
    };
    const state = donationsReducer([], action);

    expect(state).toEqual([...payments]);
  });
});
