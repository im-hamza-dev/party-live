import React, { useState } from "react";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";
import FlexBox from "../Common/FlexBox";
import beerColor from "../../Assets/images/beerColor.png";
import beerBlack from "../../Assets/images/beerBlack.png";
export default function ReactionsBar() {
  const [beerA, setA] = useState(false);
  const [beerB, setB] = useState(false);
  const [beerC, setC] = useState(false);
  const [heart, setHeart] = useState(false);

  const onChangeA = () => {
    if (beerA) {
      setA(false);
    } else {
      setA(true);
    }
  };
  const onChangeB = () => {
    if (beerB) {
      setB(false);
    } else {
      setB(true);
    }
  };
  const onChangeC = () => {
    if (beerC) {
      setC(false);
    } else {
      setC(true);
    }
  };
  const onChangeHeart = () => {
    if (heart) {
      setHeart(false);
    } else {
      setHeart(true);
    }
  };
  return (
    <>
      <StyledFlexBox alignItems="center" justifyContent="space-between">
        <StyledButton onClick={() => onChangeA()}>
          {beerA ? (
            <StyledImg alt="colored" src={beerColor} />
          ) : (
            <StyledImg alt="black" src={beerBlack} />
          )}
        </StyledButton>
        <StyledButton onClick={() => onChangeB()}>
          {beerB ? (
            <StyledImg alt="colored" src={beerColor} />
          ) : (
            <StyledImg alt="black" src={beerBlack} />
          )}
        </StyledButton>
        <StyledButton onClick={() => onChangeC()}>
          {beerC ? (
            <StyledImg alt="colored" src={beerColor} />
          ) : (
            <StyledImg alt="black" src={beerBlack} />
          )}
        </StyledButton>
        <StyledButton onClick={() => onChangeHeart()}>
          {heart ? <Icon name="heart red" /> : <Icon name="heart" />}
        </StyledButton>
      </StyledFlexBox>
    </>
  );
}
const StyledFlexBox = styled(FlexBox)`
  border-radius: 6px;
  background-color: rgb(113, 112, 112, 0.5);
  padding: 10px 15px;
`;

const StyledImg = styled.img`
  width: 30px;
  height: 30px;
  margin: 0px;
  padding: 0px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;
