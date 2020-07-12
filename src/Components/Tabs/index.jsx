import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import FlexBox from "../Common/FlexBox";
import StyledSegment from "../Common/StyledSegment";
import TabPanes from "./TabPanes";

const StyledButton = styled(Button)`
  &&&& {
    border-radius: 18px;
    font-size: 20px;
    font-family: poppins;
    font-weight: 800;
    color: white;
    background-image: linear-gradient(50deg, #ff4af9, #71cdff);
    box-shadow: 0px 0px 5px #ba7ac0;
    margin-right: 15px;
    padding: 13px 16px;
    transition: 2s !important;
    &:hover {
      background-image: linear-gradient(-50deg, #ff4af9, #71cdff);
    }
  }
`;
const StyledName = styled.div`
  font-size: 25px;
  font-family: poppins;
  font-weight: 800;
  color: white;
  flex-grow: 1;
`;

const StyledBox = styled(StyledSegment)`
  &&&& {
    background-color: transparent;
    color: white;
  }
`;

export default function Tabs() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <FlexBox alignItems="center">
        <StyledName>Actor name</StyledName>
        <StyledButton
          onClick={() => {
            setIndex(0);
          }}
        >
          Bar
        </StyledButton>
        <StyledButton
          onClick={() => {
            setIndex(1);
          }}
        >
          Ranking
        </StyledButton>
        <StyledButton
          onClick={() => {
            setIndex(2);
          }}
        >
          Friends
        </StyledButton>
      </FlexBox>
      <StyledBox style={{ padding: 0, maxHeight: 200, overflow: "hidden" }}>
        <TabPanes index={index} />
      </StyledBox>
    </>
  );
}
