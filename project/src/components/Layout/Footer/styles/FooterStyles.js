import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

export const FooterGrid = styled(Grid)`
  background-color: rgb(94, 94, 93);
  color: whitesmoke;
  height: 94px;
  justify-content: center;

  @media (max-width: 960px) {
    height: 130px;
  }
`;

export const FooterTextGrid = styled(Grid)`
  text-align: center;
  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

export const FooterLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: white;
`;

export const ButtonFooterGrid = styled(Grid)`
  margin: auto !important;
  background-color: rgb(94, 94, 93);
  color: #cbcccc;
  text-align: center;
`;

export const MiddleFooterDivider = styled(Divider)`
  background-color: #707070 !important;
  text-align: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 99%;
  font-size: 16px;
  font-family: roboto;
  height: 1px;
`;

export const TopFooterGrid = styled(Grid)`
  padding-top: 16px;
  height: 62px;
  font-size: 24px;
  margin: auto !important;
  background-color: rgb(94, 94, 93);
  color: #ffffffde;
  text-align: center;
  font-family: roboto;
  @media (max-width: 960px) {
    padding-top: 0px;
  }
`;
