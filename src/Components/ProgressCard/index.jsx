import React from "react";
import styled from "styled-components";
import { Step, Image } from "semantic-ui-react";

const StyledImage = styled(Image)`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  margin-left: 3px;
`;
const StyledStep = styled(Step)`
  &&&& {
    // border-radius: 10px;
  }
`;

export default function ProgressCard() {
  return (
    <>
      <Step.Group>
        <StyledStep>
          <div>
            <StyledImage src="https://shoescrossroads.com/wp-content/uploads/2020/02/Attitude-girl-shoescrossroads.com-63-1024x683.jpeg" />
            <Step.Content>
              <Step.Title>Billing</Step.Title>
            </Step.Content>
          </div>
        </StyledStep>
        <StyledStep active>
          <div>
            <StyledImage src="https://shoescrossroads.com/wp-content/uploads/2020/02/Attitude-girl-shoescrossroads.com-63-1024x683.jpeg" />
            <Step.Content>
              <Step.Title>Billing</Step.Title>
            </Step.Content>
          </div>
        </StyledStep>

        <StyledStep disabled>
          <div>
            <StyledImage src="https://shoescrossroads.com/wp-content/uploads/2020/02/Attitude-girl-shoescrossroads.com-63-1024x683.jpeg" />
            <Step.Content>
              <Step.Title>Billing</Step.Title>
            </Step.Content>
          </div>
        </StyledStep>
        <StyledStep disabled>
          <div>
            <StyledImage src="https://shoescrossroads.com/wp-content/uploads/2020/02/Attitude-girl-shoescrossroads.com-63-1024x683.jpeg" />
            <Step.Content>
              <Step.Title>You</Step.Title>
            </Step.Content>
          </div>
        </StyledStep>
        {/* <StyledStep disabled>
          <div>
            <StyledImage src="https://shoescrossroads.com/wp-content/uploads/2020/02/Attitude-girl-shoescrossroads.com-63-1024x683.jpeg" />
            <Step.Content>
              <Step.Title>Billing</Step.Title>
            </Step.Content>
          </div>
        </StyledStep> */}
      </Step.Group>
    </>
  );
}
