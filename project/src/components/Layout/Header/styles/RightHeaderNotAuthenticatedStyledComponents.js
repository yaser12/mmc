import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";

export const StyledDivider = styled(Divider)`
        background-color: ${({ theme }) => theme.default.primary.light_font}; 
        height: 55px;
        margin-left: 7px;
        margin-right: 7px;
  }
`;
export const StyledIconButton = styled(IconButton)`
        margin-right: -15px;
  }
`;
export const ConatainerGrid = styled(Grid)`
        text-align: right;
  }
`;
export const LangDiv = styled.div`
    font-size: 26px !important;
    color: white !important;
    padding: 1px !important;
    font-weight: normal !important;
    text-transform: capitalize !important;
}
`;
