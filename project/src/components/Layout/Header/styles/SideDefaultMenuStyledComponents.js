import styled from "styled-components"
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";

export const StyledList = styled(List)`
    height: 40px;
  }
`;
export const ChangLangList = styled(List)`
  color: ${({ theme }) => theme.default.primary.dark};
  font-size: 16px;
  text-align: center;
  margin: auto;
  }
`;
export const StyledChangLangListItem = styled(ListItem)` 
    color:  ${({ theme }) => theme.default.primary.dark};
    justify-content: center;
    font-size: 16px;
    &:hover {
        background-color:  ${({ theme }) => theme.default.primary.light_background};  
    };
    &:focus {
        background-color:  ${({ theme }) => theme.default.primary.light_background}; 
    };
  }
`;
export const ListItemIconListItem = styled(ListItem)` 
        background-color: ${({ theme }) => theme.default.primary.white};  !important,
        font-size: 16px,
  }
`;
export const StyledListItem = styled(ListItem)` 
    color:  ${({ theme }) => theme.default.primary.dark};
    font-size: 16px;
    &:hover {
        background-color:  ${({ theme }) => theme.default.primary.light_background}; 
    };
    &:focus {
        background-color:  ${({ theme }) => theme.default.primary.light_background}; 
    };
  }
`;
export const StyledTD = styled.td`
color:  ${({ theme }) => theme.default.primary.dark};
    font-size: 16px;
    &:hover {
        background-color:  ${({ theme }) => theme.default.primary.light_background}; 
    };
    &:focus {
        background-color: ${({ theme }) => theme.default.primary.light_background}; 
    };
  }
}
`;
export const MobileBackList = styled(List)`
  padding-left: 10px;
  background-color: ${({ theme }) => theme.default.primary.main};
  height: 40px;
  }
`;
export const MobileBackIconButton = styled(IconButton)`
    font-size: 16px;
    padding: 0px;
    color: ${({ theme }) => theme.default.primary.dark};
  }
`;
export const MobileBackGrid = styled(Grid)`
        margin: auto;
  }
`;
export const StyledLogoImg = styled.img`
    width: 100%;
    padding: 15px;
}
`;
export const MobileTextLogoGrid = styled(Grid)`
    color: white;
    font-size: 23px;
    font-weight: bold;
    text-align: center;
  }
`;
export const TitleMenuSideList = styled(List)`
        background-color: ${({ theme }) => theme.default.primary.dark};
  }
`;
export const LogoLink = styled(Link)`
        @media (min-width: 1280px) {};
        @media (max-width: 1280px) {
            margin-left: -4px;
        };
  }
`;
export const StyledDrawer = styled(Drawer)`  
    width: 280px;
    height: 100%;
    overflow-y: scroll;
    border-color:  ${({ theme }) => theme.default.primary.dark};
    }
`;
export const ContainerDiv = styled.div`  
    width: 280px;
    height: 100%;
    overflow-y: scroll;
    border-color:  ${({ theme }) => theme.default.primary.dark};
    }
`;
