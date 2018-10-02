import alertReducer from "../../reducers/alert";

describe("alertReducer", () => {
  test("should setup default alert values", () => {
    const action = { type: "@@INIT" };
    const state = alertReducer(undefined, action);

    expect(state).toEqual({
      show: false,
      title: "",
      message: "",
      type: ""
    });
  });

  test("should set show to false", () => {
    const action = { type: "SET_ALERT" };
    const state = alertReducer(undefined, action);

    expect(state.show).toBeFalsy();
  });

  test("should set show to true", () => {
    const action = { type: "SET_ALERT" };
    const currentState = {
      show: true,
      title: "Thank you",
      message: "Your payment received",
      type: "success"
    };
    const state = alertReducer(currentState, action);

    expect(state.show).toBeTruthy();
  });
});
