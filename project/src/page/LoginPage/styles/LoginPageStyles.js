import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import loginbg from "../loginbg.jpg";

export const ImageGrid = styled(Grid)`
  height: 700px;
  background-image: url(${loginbg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  color: ${({ theme }) => theme.default.primary.white};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

export const OverlayGrid = styled(Grid)`
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  text-align: left;
  padding-left: 34px;
`;

export const CenteredTitleGrid = styled(Grid)`
  font-size: 36px;
  font-family: roboto;
`;

export const CenteredTextGrid = styled(Grid)`
  font-size: 24px;
  font-family: roboto;
`;

export const FormGrid = styled(Grid)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginHeaderDiv = styled.div`
  font-size: 36px;
  font-family: "Roboto";
`;

export const PaperDiv = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 16px;
  height: 700px;
  padding-top: 130px;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
