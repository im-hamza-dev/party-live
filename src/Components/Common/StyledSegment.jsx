import React from "react";
import styled from "styled-components";
import { Segment } from "semantic-ui-react";

const StyledSegment = styled((props) => <Segment padded="very" {...props} />)`
  &.ui[class*="very padded"].segment {
    padding: 2.2em;
  }

  &&&&& {
    border-radius: 16px;
    box-shadow: 0px 0px 9px #717171;
    border: none;
  }
`;
export default StyledSegment;
