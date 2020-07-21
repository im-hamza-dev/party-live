import React from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";
import FlexBox from "../Common/FlexBox";
import First from "../../Assets/images/dancers/1stdancer.jpeg";
import Second from "../../Assets/images/dancers/2nddancer.jpg";
import Third from "../../Assets/images/dancers/3rddancer.jpeg";
import Fifth from "../../Assets/images/dancers/5thdancer.jpeg";
import You from "../../Assets/images/dancers/you.png";

const StyledImage = styled(Image)`
  border-radius: 10px;
  width: 55px;
  height: 55px;
  margin-bottom: 10px;
  margin-left: 3px;
`;
// const StyledStep = styled(Step)`
//   &&&& {
//     // border-radius: 10px;
//     background-color: transparent;
//   }
// `;
const Name = styled.div`
  color: white;
`;

export default function ProgressCard() {
  return (
    <>
      {/* <Step.Group>
        <StyledStep>
          <div>
            <StyledImage src={First} />
            <Step.Content>
              <Step.Title>Billing</Step.Title>
            </Step.Content>
          </div>
        </StyledStep>
        <StyledStep active>
          <div>
            <StyledImage src={Second} />
            <Step.Content>
              <Step.Title>Billing</Step.Title>
            </Step.Content>
          </div>
        </StyledStep>

        <StyledStep disabled>
          <div>
            <StyledImage src={Third} />
            <Step.Content>
              <Step.Title>Billing</Step.Title>
            </Step.Content>
          </div>
        </StyledStep>
        <StyledStep disabled>
          <div>
            <StyledImage src={You} />
            <Step.Content>
              <Step.Title>You</Step.Title>
            </Step.Content>
          </div>
        </StyledStep>
        <StyledStep disabled>
          <div>
            <StyledImage src={Fifth} />
            <Step.Content>
              <Step.Title>Billing</Step.Title>
            </Step.Content>
          </div>
        </StyledStep>
      </Step.Group> */}
      <FlexBox
        alignItems="center"
        justifyContent="space-between"
        style={{ width: "80%", margin: "auto", padding: 30 }}
      >
        <FlexBox flexDirection="column" alignItems="center">
          <StyledImage src={First} />
          <Name>First</Name>
        </FlexBox>
        <FlexBox flexDirection="column" alignItems="center">
          <StyledImage src={Second} />
          <Name>Second</Name>
        </FlexBox>
        <FlexBox flexDirection="column" alignItems="center">
          <StyledImage src={Third} />
          <Name>Third</Name>
        </FlexBox>
        <FlexBox flexDirection="column" alignItems="center">
          <StyledImage src={You} />
          <Name>You</Name>
        </FlexBox>
        <FlexBox flexDirection="column" alignItems="center">
          <StyledImage src={Fifth} />
          <Name>Fifth</Name>
        </FlexBox>
      </FlexBox>
    </>
  );
}
