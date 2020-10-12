import React from "react";
import { Grid } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import trotecLogo from "./images/trotec-logo.png";
import * as paths from "../../../configs/paths";
import {
    StyledNavigateNextIcon
    , ContainerGrid
    , PageTitleTd
    , StyledLogoLink
    , ImgLogo
} from "./styles/MiddleHeaderAuthenticatedStyledComponents";

const MiddleHeaderAuthenticated = () => {
    return (
        <ContainerGrid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={2}
        >
            <Grid container>
                <Hidden lgUp mdUp>
                    <Grid
                        item
                        xs={5}
                        sm={5}
                        md={9}
                        lg={9}
                    ></Grid>
                </Hidden>
                <Hidden lgUp mdUp>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <StyledNavigateNextIcon />
                                </td>
                                <PageTitleTd>
                                    MultiMeasure Center
                            </PageTitleTd>
                            </tr>
                        </tbody>
                    </table>
                </Hidden>
                <Hidden smDown xsDown>
                    <StyledLogoLink to={paths.ROOT}  >
                        <ImgLogo
                            src={trotecLogo}
                            alt="trotec"
                        />
                    </StyledLogoLink>
                </Hidden>
                <Hidden lgUp mdUp>
                    <Grid
                        item
                        xs={5}
                        sm={5}
                        md={9}
                        lg={9}

                    ></Grid>
                </Hidden>
            </Grid>
        </ContainerGrid>
    );
};

export default MiddleHeaderAuthenticated;
