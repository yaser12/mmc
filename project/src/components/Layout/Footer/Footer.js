import React from "react";
import Grid from "@material-ui/core/Grid"; // Material UI
import { useTranslation } from "react-i18next"; // For translation

// Styled components
import {
  TopFooterGrid,
  FooterTextGrid,
  FooterLink,
  MiddleFooterDivider,
  ButtonFooterGrid,
} from "./styles/FooterStyles";

// Paths
import * as paths from "../../../configs/paths";

const Footer = () => {
  const { t } = useTranslation("words");
  return (
    <TopFooterGrid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container>
          <Grid item xs={false} sm={false} md={2} lg={3}></Grid>
          <Grid item xs={12} sm={12} md={8} lg={6} elevation={6}>
            <Grid container>
              <FooterTextGrid item xs={12} sm={12} md={4} lg={4}>
                <FooterLink to={paths.PRIVACY}>{t("privacy")}</FooterLink>
              </FooterTextGrid>
              <FooterTextGrid item xs={12} sm={12} md={4} lg={4}>
                <FooterLink to={paths.TERMS_OF_USE}>
                  {t("terms_of_use")}
                </FooterLink>
              </FooterTextGrid>
              <FooterTextGrid item xs={12} sm={12} md={4} lg={4}>
                <FooterLink to={paths.IMPRINT}>{t("imprint")}</FooterLink>
              </FooterTextGrid>
            </Grid>
          </Grid>
          <Grid item xs={false} sm={false} md={2} lg={3} elevation={6}></Grid>
        </Grid>
      </Grid>
      <MiddleFooterDivider />
      <ButtonFooterGrid item xs={12} sm={12} md={12} lg={12} elevation={6}>
        © Trotec GmbH, 2020
      </ButtonFooterGrid>
    </TopFooterGrid>
  );
};

export default Footer;
