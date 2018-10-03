import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { setCharities, startSetCharities } from "../../actions/charities";
import charities from "../fixtures/charities";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("setCharities", () => {
  test("should setup setCharities action object with provided values", () => {
    const action = setCharities(charities[2]);

    expect(action).toEqual({
      type: "SET_CHARITIES",
      charities: charities[2]
    });
  });
});

describe("startSetCharities", () => {
  test("should fetch the charities from server", done => {
    const store = mockStore({});
    store.dispatch(startSetCharities()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual("SET_CHARITIES");
      done();
    });
  });
});
