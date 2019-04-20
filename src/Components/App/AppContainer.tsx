import React from "react";
import { graphql } from "react-apollo";
import { IS_LOGGED_IN } from "./AppQueries";
import AppPresenter from "./AppPresenter";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import GlobalStyle from "../../global-styles";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
const AppContainer = ({ data }: any) => (
  <React.Fragment>

    <ThemeProvider theme={theme}>
      <React.Fragment>
        <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
        <GlobalStyle />
      </React.Fragment>
    </ThemeProvider>
    <ToastContainer draggable={true} position={"bottom-center"}/>
  </React.Fragment>
);

export default graphql(IS_LOGGED_IN)(AppContainer);
