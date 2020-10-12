import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import SettingsIcon from "@material-ui/icons/Settings";
import styled from "styled-components";

export const ContainerGrid = styled(Grid)`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.default.primary.dark};
    border-radius: theme.shape.borderRadius,
    border-color: "transparent",
    color:  ${({ theme }) => theme.default.primary.white};  
  }
`;
export const StyledSettingsIcon = styled(SettingsIcon)`
    color:  ${({ theme }) => theme.default.primary.white};  
    vertical-align: middle;
  }
`;
export const GridAuthNameSittings = styled(Grid)`
    text-align: -webkit-right
  }
`;
export const StyledLink = styled(Link)`    
        white-space: nowrap;
        text-decoration: none;
        font-size: 24px;
        color: ${({ theme }) => theme.default.primary.white};
        margin-right: 35px;
        &:hover {
            color: ${({ theme }) => theme.default.primary.main};
        };
        &:focus {
            color: ${({ theme }) => theme.default.primary.main};
        };
        @media (max-width: 1264px) {
            font-size: 20px;
        };
        @media (min-width: 1280px) {
            font-size: 26px;
        };
  }
`;
export const PaddingGrid = styled(Grid)`
    text-align: left;
    color: white;
    &:hover {
        color: ${({ theme }) => theme.default.primary.main};
    };
    &:focus {
        color:${({ theme }) => theme.default.primary.main};
    }
  }
`;
export const StyledDivider = styled(Divider)`
        background-color: ${({ theme }) => theme.default.primary.light_font}; 
        height: 55px;
        margin-left: 7px;
        margin-right: 7px;
  }
`;
export const AuthNameDiv = styled.div`
    font-size: 26px !important;
    color: white !important;
    padding: 1px !important;
    font-weight: normal !important;
    text-transform: capitalize !important;
}
`;
