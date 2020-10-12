import React from "react";
import { CtaButton, CtaWrapperDiv } from "./styles/CtaStyles";

const Cta = (props) => {
  return (
    <CtaWrapperDiv>
      <CtaButton {...props} variant="contained">
        {props.children}
      </CtaButton>
    </CtaWrapperDiv>
  );
};

export default Cta;
