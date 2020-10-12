// React built-in
import React from "react";
import { Redirect } from "react-router";

// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

// Third-Party
import { useTranslation } from "react-i18next"; // For translation
import { useSelector } from "react-redux";

// Paths
import * as routes from "../../configs/paths";

// Project-related components
import LoginContainer from "../../container/LoginContainer/LoginContainer";

// Import Styled components
import {
  ImageGrid,
  OverlayGrid,
  CenteredTitleGrid,
  CenteredTextGrid,
  FormGrid,
  LoginHeaderDiv,
  PaperDiv,
} from "./styles/LoginPageStyles";


const LoginPage = () => {
  const { t } = useTranslation("words");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {isAuthenticated && <Redirect to={routes.WELCOME} />}
      <Grid container>
        <CssBaseline />
        <Hidden mdDown>
          <ImageGrid item xs={false} sm={4} md={9}>
            <OverlayGrid item xs={false} sm={12} md={12}>
              <Grid container>
                <CenteredTitleGrid item xs={false} sm={12} md={12} lg={12}>
                  MultiMeasure Center aktuell
                </CenteredTitleGrid>
                <CenteredTextGrid item xs={false} sm={6} md={6} lg={6}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  jsuto duo dolores et ea rebum. Stet clita kasd gubergen, no
                  dea tkimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum
                  dolor sit amet, consetetur sadipsing elitr, sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore mangna aliquyam
                  erat, sed diam voluptua.
                </CenteredTextGrid>
              </Grid>
            </OverlayGrid>
          </ImageGrid>
        </Hidden>
        <FormGrid
          item
          xs={12}
          sm={12}
          md={12}
          lg={3}
          component={Paper}
          elevation={6}
          square
        >
          <PaperDiv>
            <LoginHeaderDiv>{t("register_now")}</LoginHeaderDiv>
            <LoginContainer />
          </PaperDiv>
        </FormGrid>
      </Grid>
    </>
  );
};

export default LoginPage;
