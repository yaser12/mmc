import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

export const HeaderDiv = styled.div`
  height: 60px;
  padding-bottom: 65px;
  ${"" /* flex-grow: 1; */}
`;

export const FooterDiv = styled.div`
  height: 30px;
  @media (max-height: 749px) {
    margin-top: auto;
    position: static;
    bottom: 0;
    width: 100%;
  }
  @media (min-width: 900px) {
    margin-top: auto;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  @media (min-height: 750px) {
    margin-top: auto;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-top: 35px;
  }
`;

export const MainDiv = styled.div`
  flex: 1;
  @media (max-height: 749px) {
    flex: 1;
    height: 700px;
  }
`;

export const ContentGrid = styled(Grid)`
  height: 700px;
  @media (min-height: 750px) {
    height: calc(100vh - 64px);
  }
`;
