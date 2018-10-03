import charitiesReducer from "../../reducers/charities";
import charities from "../fixtures/charities";

describe("charitiesReducer", () => {
  test("should setup default charities values", () => {
    const action = { type: "@@INIT" };
    const state = charitiesReducer(undefined, action);

    expect(state).toEqual([]);
  });

  test("should set charities", () => {
    const action = {
      type: "SET_CHARITIES",
      charities
    };
    const state = charitiesReducer([], action);

    expect(state).toEqual([...charities]);
  });
});
