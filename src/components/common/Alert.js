import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import { setAlert } from "../../actions/alert";

class Alert extends React.PureComponent {
  closeAlert = () => {
    const { dispatch } = this.props;
    dispatch(setAlert({ show: false }));
  };

  render() {
    const { alert } = this.props;
    return (
      alert.show && (
        <SweetAlert
          type={alert.type}
          title={alert.title}
          onConfirm={this.closeAlert}
          confirmBtnStyle={{
            backgroundColor: "#FFFFFF",
            borderRadius: "3px",
            padding: "5px 10px",
            cursor: "pointer"
          }}
          confirmBtnText="Close"
        >
          {alert.message}
        </SweetAlert>
      )
    );
  }
}

const mapStateToProps = state => ({
  alert: state.alert
});

Alert.propTypes = {
  alert: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Alert);
