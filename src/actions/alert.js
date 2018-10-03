// SET_ALERT
export const setAlert = ({
  show = false,
  title = "",
  message = "",
  type = ""
} = {}) => ({
  type: "SET_ALERT",
  alert: {
    show,
    title,
    message,
    type
  }
});
