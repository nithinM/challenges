import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  addDonation,
  setDonations,
  startAddDonation,
  startSetDonations
} from "../../actions/donations";
import payments from "../fixtures/payments";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("addDonation", () => {
  test("should setup addDonation action object with provided value", () => {
    const action = addDonation(payments[1]);

    expect(action).toEqual({
      type: "ADD_DONATION",
      donation: payments[1]
    });
  });
});

describe("startAddDonation", () => {
  test("should add donations to database and store", done => {
    const store = mockStore({});
    const donationsData = {
      charitiesId: 1,
      amount: 100,
      currency: "THB"
    };

    store.dispatch(startAddDonation(donationsData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_DONATION",
        donation: {
          ...donationsData
        }
      });
      done();
    });
  });
});

describe("setDonations", () => {
  test("should setup setDonations action object with provided values", () => {
    const action = setDonations(payments);

    expect(action).toEqual({
      type: "SET_DONATIONS",
      donations: payments
    });
  });
});

describe("startSetDonations", () => {
  test("should fetch the donations from server", done => {
    const store = mockStore({});
    store.dispatch(startSetDonations()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual("SET_DONATIONS");
      done();
    });
  });
});
