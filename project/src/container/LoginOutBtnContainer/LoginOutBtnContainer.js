import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LOGIN } from "../../configs/paths";
import * as authActions from "../../store/actions/authActions";

import { StyledLink, StyledButton } from "./styles/LoginOutBtnContainerStyles";

const LoginOutBtnContainer = () => {
  const { t } = useTranslation("words");
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();
  const handleLogoutClick = () => {
    dispatch(authActions.initLogout(history));
  };
  let link = <StyledLink to={LOGIN}>{t("log_in")}</StyledLink>;
  if (isAuthenticated) {
    link = (
      <StyledButton onClick={handleLogoutClick}>{t("log_in")}</StyledButton>
    );
  }
  return link;
};

export default LoginOutBtnContainer;
