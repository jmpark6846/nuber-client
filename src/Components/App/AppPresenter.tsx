import React from "react";
import PropTypes from "prop-types";

interface AppPresenterProps{
  isLoggedIn: boolean
}
const AppPresenter: React.FunctionComponent<AppPresenterProps> = ({ isLoggedIn }) =>
  isLoggedIn ? <span>you are in</span> : <span>you are out</span>;

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};
export default AppPresenter;
