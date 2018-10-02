//  Charities reducer
const charitiesReducerDefaultState = [];

const charitiesReducer = (state = charitiesReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_CHARITIES":
      return action.charities;
    default:
      return state;
  }
};

export default charitiesReducer;
