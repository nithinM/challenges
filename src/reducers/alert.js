// alertReducer Reducer
const alertReducerDefaultState = {
  show: false,
  title: "",
  message: "",
  type: ""
};

const alertReducer = (state = alertReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return { ...state, ...action.alert };

    default:
      return state;
  }
};

export default alertReducer;
