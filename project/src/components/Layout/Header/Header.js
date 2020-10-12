import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import { useSelector } from "react-redux";
import Hidden from "@material-ui/core/Hidden";
import RightHeaderAuthenticated from "./RightHeaderAuthenticated";
import RightHeaderNotAuthenticated from "./RightHeaderNotAuthenticated";
import MiddleHeaderNotAuthenticated from "./MiddleHeaderNotAuthenticated";
import MiddleHeaderAuthenticated from "./MiddleHeaderAuthenticated";
import SideLangMenu from "./SideLangMenu";
import SideDefaultMenu from "./SideDefaultMenu";

const HeaderGrid = styled(Grid)`
        margin: auto;
  }
`;
const StyledAppBar = styled(AppBar)`
        background-color: rgb(94, 94, 93);
        padding-right: 0px !important;
  }
`;
const StyledIconButton = styled(IconButton)`
        margin-top: 12px;
        margin-left: -12px;
        margin-right: 20px;
  }
`;
const HeaderContainerGrid = styled(Grid)`
        padding-left: 33px;
        padding-right: 23px;
        background-color: rgb(94, 94, 93);
        box-shadow: 0 -9px 12px 7px rgba(0, 0, 0, 0.5);
        color: whitesmoke;
        height: 70px;
        display: flex;
  }
`;
const RootDiv = styled.div`
        width: 100%;
}
`;
const Header = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [open, setOpen] = React.useState(false);
    const [showLangMenu, setShowLangMenu] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    return (
        <RootDiv  >
            <StyledAppBar  >
                <HeaderContainerGrid container  >
                    <Grid container>
                        <Grid item xs={1} sm={1} md={false} lg={false}>
                            <Hidden lgUp mdUp>
                                <StyledIconButton
                                    onClick={handleDrawerOpen}
                                    color="inherit"
                                    aria-label="Open drawer"
                                >
                                    <MenuIcon />
                                </StyledIconButton>
                            </Hidden>
                        </Grid>
                        <HeaderGrid
                            item
                            xs={6}
                            sm={6}
                            md={12}
                            lg={12}
                            xl={12}
                        >
                            <Grid container justify="center" alignItems="center">
                                {!isAuthenticated ? (
                                    <MiddleHeaderNotAuthenticated />
                                ) : (
                                        <MiddleHeaderAuthenticated />
                                    )}
                                {!isAuthenticated ? (
                                    <RightHeaderNotAuthenticated />
                                ) : (
                                        <RightHeaderAuthenticated />
                                    )}
                            </Grid>
                        </HeaderGrid>
                        <Grid item xs={2} sm={2} md={false} lg={false}></Grid>
                    </Grid>
                </HeaderContainerGrid>
            </StyledAppBar>
            {
                showLangMenu ? (
                    <SideLangMenu isShowLangMenu={showLangMenu}
                        doShowLangMenu={setShowLangMenu}
                        isOpen={open} doOpen={setOpen}
                    />
                ) : (
                        <SideDefaultMenu
                            isShowLangMenu={showLangMenu}
                            doShowLangMenu={setShowLangMenu}
                            isOpen={open} doOpen={setOpen}
                        />
                    )
            }
        </RootDiv >
    );
};

export default Header;
