//  Donations reducer
const donationsReducerDefaultState = [];

const donationsReducer = (state = donationsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_DONATIONS":
      return action.donations;
    default:
      return state;
  }
};

export default donationsReducer;
