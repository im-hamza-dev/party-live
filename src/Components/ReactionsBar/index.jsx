import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import FlexBox from "../Common/FlexBox";
import beerColor from "../../Assets/images/beerColor.png";
import beerBlack from "../../Assets/images/beerBlack.png";
export default function ReactionsBar() {
  const [value, setValue] = useState(0);
  document.body.onkeyup = function (e) {
    if (e.keyCode === 32) {
      onIncrement();
    }
  };

  const onIncrement = () => {
    if (value <= 3) {
      setValue(value + 1);
    } else {
      setValue(0);
    }
  };
  return (
    <>
      <StyledFlexBox alignItems="center" justifyContent="space-between">
        <StyledButton>
          {value === 0 && (
            <>
              <StyledImg alt="black" src={beerBlack} />
              <StyledImg alt="black" src={beerBlack} />
              <StyledImg alt="black" src={beerBlack} />
              <StyledIcon name="large heart" />
            </>
          )}
          {value === 1 && (
            <>
              <StyledImg alt="colored" src={beerColor} />
              <StyledImg alt="black" src={beerBlack} />
              <StyledImg alt="black" src={beerBlack} />
              <StyledIcon name="large heart" />
            </>
          )}
          {value === 2 && (
            <>
              <StyledImg alt="colored" src={beerColor} />
              <StyledImg alt="colored" src={beerColor} />
              <StyledImg alt="black" src={beerBlack} />
              <StyledIcon name="large  heart" />
            </>
          )}
          {value === 3 && (
            <>
              <StyledImg alt="colored" src={beerColor} />
              <StyledImg alt="colored" src={beerColor} />
              <StyledImg alt="colored" src={beerColor} />
              <StyledIcon name=" large heart" />
            </>
          )}
          {value === 4 && (
            <>
              <StyledImg alt="colored" src={beerColor} />
              <StyledImg alt="colored" src={beerColor} />
              <StyledImg alt="colored" src={beerColor} />
              <StyledIcon name="large heart red" />
            </>
          )}
        </StyledButton>
      </StyledFlexBox>
    </>
  );
}
const StyledFlexBox = styled(FlexBox)`
  border-radius: 6px;
  background-color: rgb(113, 112, 112, 0.5);
  padding: 5px 10px;
`;
const StyledIcon = styled(Icon)`
  margin-top: -17px !important;
  margin-left: 5px !important;
`;

const StyledImg = styled.img`
  width: 25px;
  height: 25px;
  margin: 3px;
  padding: 0px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;
