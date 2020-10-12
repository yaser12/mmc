import React from "react";
import { Grid } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useTranslation } from "react-i18next";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useSelector } from "react-redux";
import trotecLogo from "./images/trotec-logo.png";
import germanflag from "./images/germanflag.png";
import * as paths from "../../../configs/paths";
import {
    StyledList
    , ChangLangList
    , StyledChangLangListItem
    , ListItemIconListItem
    , StyledListItem
    , StyledTD
    , MobileBackList
    , MobileBackIconButton
    , MobileBackGrid
    , MobileTextLogoGrid
    , TitleMenuSideList
    , LogoLink
    , StyledDrawer
    , ContainerDiv
    , StyledLogoImg
} from "./styles/SideDefaultMenuStyledComponents";

const SideDefaultMenu = ({ isShowLangMenu, doShowLangMenu, isOpen, doOpen }) => {
    const { t, i18n } = useTranslation("words");
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const handleDrawerClose = () => {
        if (isShowLangMenu) {
            doShowLangMenu(false);
        } else {
            doOpen(false);
        }
    };
    const handleShowLangMenu = () => {
        doShowLangMenu(true);
    };
    return (
        <StyledDrawer
            variant="persistent"
            anchor="left"
            open={isOpen}
        >
            <ContainerDiv>
                <TitleMenuSideList>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12}>
                            <LogoLink to={paths.ROOT} >
                                <StyledLogoImg
                                    src={trotecLogo}
                                    alt="trotec"
                                />
                            </LogoLink>
                        </Grid>
                        <MobileTextLogoGrid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                        >
                            MultiMeasure Center
                </MobileTextLogoGrid>
                    </Grid>
                </TitleMenuSideList>
                <MobileBackList onClick={handleDrawerClose}  >
                    <MobileBackIconButton>
                        <Grid container>
                            <Grid item xs={6} sm={6}>
                                <ArrowBackIcon />
                            </Grid>
                            <MobileBackGrid
                                item
                                xs={6}
                                sm={6}  >
                                {t("back")}
                            </MobileBackGrid>
                        </Grid>
                    </MobileBackIconButton>
                </MobileBackList>
                <StyledList>
                    <StyledListItem>
                        {t("customers")}
                    </StyledListItem>
                </StyledList>
                <StyledList>
                    <StyledListItem>
                        {t("measurement_projects")}
                    </StyledListItem>
                </StyledList>
                <StyledList>
                    <StyledListItem>
                        {t("reports")}
                    </StyledListItem>
                </StyledList>
                <StyledList>
                    <StyledListItem>
                        {t("data")}
                    </StyledListItem>
                </StyledList>
                <StyledList>
                    <StyledListItem>
                        &nbsp;&nbsp;
        </StyledListItem>
                </StyledList>
                <StyledList>
                    <StyledListItem>
                        &nbsp;&nbsp;
        </StyledListItem>
                </StyledList>
                {!isAuthenticated && (
                    <StyledList>
                        <ListItemIconListItem
                            button
                            onClick={handleDrawerClose} >
                            <ListItemIcon></ListItemIcon>
                        </ListItemIconListItem>
                    </StyledList>
                )}
                <ChangLangList
                    onClick={handleShowLangMenu} >
                    <StyledChangLangListItem>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={germanflag} width={28} height={18} alt="german" />
                                    </td>
                                    <td></td>
                                    <StyledTD>Deutsch</StyledTD>
                                </tr>
                            </tbody>
                        </table>
                    </StyledChangLangListItem>
                </ChangLangList>
            </ContainerDiv>
        </StyledDrawer>
    );
};

export default SideDefaultMenu;
