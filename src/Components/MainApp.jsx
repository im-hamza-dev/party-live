import React from "react";
import { Grid, Image, Label, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import StyledSegment from "./Common/StyledSegment";
import { Player } from "video-react";
import dj from "../Assets/dj.jpg";
import FlexBox from "./Common/FlexBox";
import party from "../Assets/videos/1.mp4";
import background from "../Assets/background.jpg";
import ProgressCard from "./ProgressCard";
import Tabs from "./Tabs";

const Body = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding: 40px;
`;
const StyledImage = styled(Image)`
  border-radius: 16px;
  max-width: 100% !important;
  max-height: 100% !important;
`;
const StyledButton = styled(Button)`
  width: 50px;
  height: 50px;
  padding: 0px !important;
  margin-left: 15px !important;
  box-shadow: 0px 0px 5px #ba7ac0 !important;
`;
const StyledLabel = styled(Label)`
  &&&& {
    border-radius: 18px;
    font-size: 20px;
    font-family: poppins;
    font-weight: 800;
    color: white;
    background-image: linear-gradient(50deg, #ff4af9, #71cdff);
    box-shadow: 0px 0px 5px #ba7ac0;
    margin-right: 15px;
  }
`;

const LabelCount = styled.div`
  border-radius: 5px;
  margin-top: -48px;
  margin-left: 18px;
  display: block;
  font-size: 13px;
  padding: 3px 5px;
  font-family: poppins;
  font-weight: 500;
  color: white;
  background-image: linear-gradient(50deg, #ff4af9, #71cdff);
  box-shadow: 0px 0px 5px #ba7ac0;
`;

const DancerHeading = styled.div`
  font-size: 30px;
  font-family: poppins;
  font-weight: 600;
  color: white;
  width: 100px;
  line-height: 30px;
`;

export default function () {
  return (
    <Body>
      <Grid>
        <Grid.Column width={8}>
          <StyledSegment
            style={{ padding: 0, maxHeight: 354, overflow: "hidden" }}
          >
            <Player>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
          </StyledSegment>
          <Tabs />
        </Grid.Column>
        <Grid.Column width={8}>
          <StyledSegment
            style={{ padding: 0, maxHeight: 354, overflow: "hidden" }}
          >
            <Player>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
          </StyledSegment>
          <FlexBox justifyContent="flex-end">
            <StyledLabel size="big">Rose Annie</StyledLabel>
            <StyledLabel size="big">25000 Viewers</StyledLabel>
            <StyledButton circular>
              <Icon
                name="heart"
                color="red"
                size="large"
                style={{ margin: 0, padding: 0, marginTop: -45 }}
              />
              <LabelCount>23</LabelCount>
            </StyledButton>
            <StyledButton circular>
              <Icon
                name="beer"
                size="large"
                color="red"
                style={{ margin: 0, padding: 0, marginTop: -45, marginLeft: 5 }}
              />
              <LabelCount>100</LabelCount>
            </StyledButton>
          </FlexBox>
          <StyledSegment
            style={{
              boxShadow: "none",
              backgroundColor: "transparent",
              border: "1px solid white",
              padding: 10,
              paddingLeft: 57,
            }}
          >
            <FlexBox>
              <Image src="" />
              <DancerHeading>NEXT DANCER</DancerHeading>
            </FlexBox>
            <ProgressCard />
          </StyledSegment>
        </Grid.Column>
      </Grid>
    </Body>
  );
}
