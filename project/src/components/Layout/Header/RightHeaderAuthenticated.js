import React from "react";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import * as paths from "../../../configs/paths";
import {
    AuthNameDiv
    , StyledDivider
    , PaddingGrid
    , StyledSettingsIcon
    , ContainerGrid
    , GridAuthNameSittings
    , StyledLink
} from "./styles/RightHeaderAuthenticatedStyledComponents";

const RightHeaderAuthenticated = () => {
    const { t } = useTranslation("words");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    return (
        <Hidden smDown>
            <Grid item xs={false} sm={false} md={9} lg={9} xl={10}>
                <ContainerGrid
                    container
                    alignItems="center"
                >
                    <Grid item xs={6} sm={6} md={8} lg={9} xl={10}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={9}>
                                <StyledLink
                                    to={paths.CUSTOMERS}   >
                                    {t("customers")}
                                </StyledLink>
                                <StyledLink
                                    to={paths.MEASUREMENTS} >
                                    {t("measurement_projects")}
                                </StyledLink>
                                <Hidden lgUp>
                                    <PaddingGrid
                                        item
                                        xs={6}
                                        sm={6}
                                        md={2}
                                        lg={1}
                                        xl={1}
                                    ></PaddingGrid>
                                </Hidden>
                                <StyledLink
                                    to={paths.REPORTINGS}   >
                                    {t("reports")}
                                </StyledLink>
                                <StyledLink
                                    to={paths.IMPORT_EXPORT} >
                                    {t("data")}
                                </StyledLink>
                            </Grid>
                        </Grid>
                    </Grid>
                    <GridAuthNameSittings
                        item
                        xs={6}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={2}
                    >
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <StyledSettingsIcon />
                                    </td>
                                    <td>
                                        <StyledDivider
                                            orientation="vertical"
                                            flexItem
                                        />
                                    </td>
                                    <td>
                                        <Avatar src="/broken-image.jpg" />
                                    </td>
                                    <Hidden xlUp>
                                        <td>&nbsp;&nbsp;</td>
                                    </Hidden>
                                    <Hidden mdDown>
                                        <td>&nbsp;&nbsp;</td>
                                    </Hidden>
                                    <td>
                                        <IconButton color="inherit">
                                            <Badge color="secondary">
                                                <div>
                                                    <AuthNameDiv
                                                        aria-controls="simple-menu"
                                                        aria-haspopup="true"
                                                        onClick={handleClick}
                                                    >
                                                        {t("first_name")} <ExpandMoreIcon />
                                                    </AuthNameDiv>
                                                    <Menu
                                                        id="simple-menu"
                                                        anchorEl={anchorEl}
                                                        keepMounted
                                                        open={Boolean(anchorEl)}
                                                        onClose={handleClose}
                                                    >
                                                        <MenuItem onClick={handleClose}>
                                                            <Button >
                                                                profile
                                                              </Button>
                                                        </MenuItem>
                                                        <MenuItem onClick={handleClose}>
                                                            <Button  >
                                                                setting
                                                            </Button>
                                                        </MenuItem>
                                                    </Menu>
                                                </div>
                                            </Badge>
                                        </IconButton>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </GridAuthNameSittings>
                </ContainerGrid>
            </Grid>
        </Hidden>
    );
};

export default RightHeaderAuthenticated;
