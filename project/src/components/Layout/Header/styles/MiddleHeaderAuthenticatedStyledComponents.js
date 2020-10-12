import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import styled from "styled-components";

export const ContainerGrid = styled(Grid)`
    @media (max-width: 1280px) and (max-height: 701px) {
        text-align: center;
    }
  }
`;
export const StyledNavigateNextIcon = styled(NavigateNextIcon)`
        color: ${({ theme }) => theme.default.primary.main};
        font-size: 48px;
        font-weight: bold;
        margin-right: -17px;
  }
`;
export const PageTitleTd = styled.td`
color: ${({ theme }) => theme.default.primary.white};
font-size: 24px;
}
`;
export const StyledLogoLink = styled(Link)`
        @media (min-width: 1280px) {};
        @media (max-width: 1280px) {
            marginLeft: -4px;
        }
}
`;
export const ImgLogo = styled.img`
        @media (min-width: 1280px) {};
        @media (max-width: 1280px) {
            marginLeft: -4px;
        }
}
`;
