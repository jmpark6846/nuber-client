import React from "react";
import { graphql } from "react-apollo";
import { IS_LOGGED_IN } from "./AppQueries";
import AppPresenter from "./AppPresenter";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import GlobalStyle from "../../global-styles";

const AppContainer = ({ data }: any) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
      <GlobalStyle />
    </React.Fragment>
  </ThemeProvider>
);

export default graphql(IS_LOGGED_IN)(AppContainer);
