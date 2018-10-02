import { setAlert } from "../../actions/alert";

describe("setAlert", () => {
  test("should generate setAlert action object for given values", () => {
    const alert = {
      show: true,
      title: "Thank you",
      message: "Your payment received",
      type: "success"
    };
    expect(setAlert(alert)).toEqual({
      type: "SET_ALERT",
      alert: { ...alert }
    });
  });

  test("should generate setAlert action object for default values", () => {
    expect(setAlert()).toEqual({
      type: "SET_ALERT",
      alert: {
        show: false,
        title: "",
        message: "",
        type: ""
      }
    });
  });
});
