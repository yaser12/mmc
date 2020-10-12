import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Badge from "@material-ui/core/Badge";
import { useTranslation } from "react-i18next";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import LoginOutBtnContainer from "../../../container/LoginOutBtnContainer/LoginOutBtnContainer";
import {
    StyledDivider
    , StyledIconButton
    , ConatainerGrid
    , LangDiv
} from "./styles/RightHeaderNotAuthenticatedStyledComponents";

const RightHeaderNotAuthenticated = () => {
    const { t, i18n } = useTranslation("words");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const enLanguage = () => {
        i18n.changeLanguage("en");
        window.location.reload(false);
    };
    const deLanguage = () => {
        i18n.changeLanguage("de");
        window.location.reload(false);
    };
    return (
        <Hidden smDown>
            <ConatainerGrid
                item
                xs={6}
                sm={6}
                md={3}
                lg={3}
                xl={2}   >
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <StyledIconButton
                                    color="inherit"       >
                                    <Badge color="secondary">
                                        <div>
                                            <LangDiv
                                                aria-controls="simple-menu"
                                                aria-haspopup="true"
                                                onClick={handleClick}    >
                                                {t("current_lang")} <ExpandMoreIcon />
                                            </LangDiv>
                                            <Menu
                                                id="simple-menu"
                                                anchorEl={anchorEl}
                                                keepMounted
                                                open={Boolean(anchorEl)}
                                                onClose={handleClose}
                                            >
                                                <MenuItem onClick={() => {
                                                    handleClose();
                                                    enLanguage();
                                                }}>
                                                    English
                                                </MenuItem>
                                                <MenuItem onClick={() => {
                                                    handleClose();
                                                    deLanguage();
                                                }}>
                                                    Deutsch
                                                </MenuItem>
                                            </Menu>
                                        </div>
                                    </Badge>
                                </StyledIconButton>
                            </td>
                            <td>
                                <StyledDivider
                                    orientation="vertical"
                                    flexItem />
                            </td>
                            <td>
                                <LoginOutBtnContainer />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </ConatainerGrid>
        </Hidden>
    );
};

export default RightHeaderNotAuthenticated;
