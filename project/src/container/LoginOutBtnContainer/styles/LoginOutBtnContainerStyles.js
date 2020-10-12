import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const sharedStyle = css`
  font-size: 26px;
  color: white;
  font-weight: normal;
  text-transform: capitalize;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  ${sharedStyle}
`;

export const StyledButton = styled(Button)`
  ${sharedStyle}
`;
