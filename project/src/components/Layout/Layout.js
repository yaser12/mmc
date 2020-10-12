import React, { useEffect } from "react";

// Styled components
import {
  HeaderDiv,
  FooterDiv,
  MainDiv,
  ContentGrid,
} from "./styles/LayoutStyles";

import useLayoutURLConfig from "../../utilities/hooks/UseLayoutURLConfig";
import GlobalSnackbarContainer from "../../container/SnackbarContainer/GlobalSnackbarContainer";

const Layout = ({ header, content, children, footer }) => {
  const { layoutState, changeLayoutState } = useLayoutURLConfig();

  useEffect(() => {
    changeLayoutState();
  }, []);

  return (
    <div>
      {layoutState.showHeader && <HeaderDiv>{header}</HeaderDiv>}
      <MainDiv>
        <ContentGrid container component="main">
          {children ? children : content}
        </ContentGrid>
      </MainDiv>
      {layoutState.showFooter && <FooterDiv>{footer}</FooterDiv>}
      <GlobalSnackbarContainer />
    </div>
  );
};

export default Layout;
