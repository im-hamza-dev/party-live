import React from "react";
import { Grid, Image, Label, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import StyledSegment from "./Common/StyledSegment";
import { Player } from "video-react";
import dj from "../Assets/dj.jpg";
import FlexBox from "./Common/FlexBox";
import party from "../Assets/videos/1.mp4";
import background from "../Assets/background.jpg";

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
  width: 36px;
  height: 36px;
  padding: 0px !important;
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
          <FlexBox justifyContent="space-between">
            <Label color="red" size="big">
              Actor Name
            </Label>
            <div>
              <Button color="red" size="big">
                Bar
              </Button>
              <Button color="red" size="big">
                Friends
              </Button>
              <Button color="red" size="big">
                Dj
              </Button>
            </div>
          </FlexBox>
          <StyledSegment
            style={{
              boxShadow: "none",
              backgroundColor: "transparent",
              border: "1px solid black",
            }}
          >
            Tabs Content here...
          </StyledSegment>
        </Grid.Column>
        <Grid.Column width={8}>
          <StyledSegment
            style={{ padding: 0, maxHeight: 354, overflow: "hidden" }}
          >
            <Player>
              <source src={party} />
            </Player>
          </StyledSegment>
          <FlexBox justifyContent="flex-end">
            <Label color="red" size="big">
              Rose Annie
            </Label>
            <Label color="red" size="big">
              25000 Viewers
            </Label>
            <StyledButton circular>
              <Icon
                name="heart"
                color="red"
                style={{ margin: 0, padding: 0 }}
              />
            </StyledButton>
            <StyledButton circular>
              <Icon name="beer" color="red" style={{ margin: 0, padding: 0 }} />
            </StyledButton>
          </FlexBox>
          <StyledSegment
            style={{
              boxShadow: "none",
              backgroundColor: "transparent",
              border: "1px solid black",
            }}
          >
            Tabs Content here...
          </StyledSegment>
        </Grid.Column>
      </Grid>
    </Body>
  );
}
