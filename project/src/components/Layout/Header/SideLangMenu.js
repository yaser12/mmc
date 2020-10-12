import React from "react";
import { Grid } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useTranslation } from "react-i18next";
import trotecLogo from "./images/trotec-logo.png";
import germanflag from "./images/germanflag.png";
import englandflag from "./images/englandflag.png";
import svenskaflag from "./images/svenskaflag.png";
import francaisflag from "./images/francais.png";
import italianoflag from "./images/italiano.png";
import polaccoflag from "./images/polacco.png";
import nederlandsflag from "./images/nederlands.png";
import suomalainenflag from "./images/suomalainen.png";
import danskflag from "./images/dansk.png";
import turkflag from "./images/turk.png";
import * as paths from "../../../configs/paths";
import {
    ContainerDiv
    , StyledDrawer
    , LogoLink
    , TitleMenuSideList
    , MobileTextLogoGrid
    , StyledLogoImg
    , MobileBackGrid
    , MobileBackIconButton
    , MobileBackList
    , StyledTD
    , StyledList
    , StyledListItem

} from "./styles/SideLangMenuStyledComponents"

const SideLangMenu = ({ isShowLangMenu, doShowLangMenu, isOpen, doOpen }) => {
    const { t } = useTranslation("words");
    const handleDrawerClose = () => {
        if (isShowLangMenu) {
            doShowLangMenu(false);
        } else {
            doOpen(false);
        }
    };
    return (
        <StyledDrawer
            autoheight={false}
            variant="persistent"
            anchor="left"
            open={isOpen}
        >
            <ContainerDiv >
                <TitleMenuSideList>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12}>
                            <LogoLink to={paths.ROOT}  >
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
                <MobileBackList
                    onClick={handleDrawerClose}  >
                    <MobileBackIconButton>
                        <Grid container>
                            <Grid item xs={6} sm={6}>
                                <ArrowBackIcon />
                            </Grid>
                            <MobileBackGrid
                                item
                                xs={6}
                                sm={6}     >
                                {t("back")}
                            </MobileBackGrid>
                        </Grid>
                    </MobileBackIconButton>
                </MobileBackList>
                <StyledList>
                    <StyledListItem  >
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
                    </StyledListItem>
                </StyledList>
                <StyledList>
                    <StyledListItem>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={englandflag} width={28} height={18} alt="england" />
                                    </td>
                                    <td></td>
                                    <StyledTD>English</StyledTD>
                                </tr>
                            </tbody>
                        </table>
                    </StyledListItem>
                </StyledList>
                <StyledList>
                    <StyledListItem>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={francaisflag} width={28} height={18} alt="francais" />
                                    </td>
                                    <td></td>
                                    <StyledTD>Français</StyledTD>
                                </tr>
                            </tbody>
                        </table>
                    </StyledListItem>
                </StyledList>
                <StyledList>
                    <StyledListItem>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={italianoflag} width={28} height={18} alt="italiano" />
                                    </td>
                                    <td></td>
                                    <StyledTD>Italiano</StyledTD>
                                </tr>
                            </tbody>
                        </table>
                    </StyledListItem>
                </StyledList>
                <StyledList>
                    <StyledListItem>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={polaccoflag} width={28} height={18} alt="polacco" />
                                    </td>
                                    <td></td>
                                    <StyledTD>Polacco</StyledTD>
                                </tr>
                            </tbody>
                        </table>
                    </StyledListItem>
                </StyledList>
                <StyledList>
                    <StyledListItem>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={nederlandsflag} width={28} height={18} alt="nederlands" />
                                    </td>
                                    <td></td>
                                    <StyledTD>
                                        Nederlands
                                             </StyledTD>
                                </tr>
                            </tbody>
                        </table>
                    </StyledListItem>
                </StyledList>
                <StyledList>
                    <StyledListItem>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={danskflag} width={28} height={18} alt="dansk" />
                                    </td>
                                    <td></td>
                                    <StyledTD>Dansk</StyledTD>
                                </tr>
                            </tbody>
                        </table>
                    </StyledListItem>
                </StyledList>
                <StyledList>
                    <StyledListItem>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={suomalainenflag} width={28} height={18} alt="suomalainen" />
                                    </td>
                                    <td></td>
                                    <StyledTD>
                                        Suomalainen
                                        </StyledTD>
                                </tr>
                            </tbody>
                        </table>
                    </StyledListItem>
                </StyledList>
                <StyledList>
                    <StyledListItem>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={turkflag} width={28} height={18} alt="turk" />
                                    </td>
                                    <td></td>
                                    <StyledTD>Türk</StyledTD>
                                </tr>
                            </tbody>
                        </table>
                    </StyledListItem>
                </StyledList>
                <StyledList>
                    <StyledListItem>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={svenskaflag} width={28} height={18} alt="svenska" />
                                    </td>
                                    <td></td>
                                    <StyledTD>Svenska</StyledTD>
                                </tr>
                            </tbody>
                        </table>
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
            </ContainerDiv >
        </StyledDrawer>
    );
};

export default SideLangMenu;
