import React, { useState } from "react";
import { Grid, Image, Label, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import StyledSegment from "./Common/StyledSegment";
import { Player } from "video-react";
import FlexBox from "./Common/FlexBox";
import background from "../Assets/images/bg1.png";
import NextDancer from "../Assets/images/nextDancer.png";
import Logo from "../Assets/images/logo.png";
// import ProgressCard from "./ProgressCard";
import Tabs from "./Tabs";

const Body = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding: 25px;
`;
// const StyledImage = styled(Image)`
//   border-radius: 16px;
//   max-width: 100% !important;
//   max-height: 100% !important;
// `;
const StyledIconButton = styled(Button)`
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
    padding: 13px 16px;
    max-height: 46px;
    background-image: linear-gradient(50deg, #ff4af9, #71cdff);
    box-shadow: 0px 0px 5px #ba7ac0;
    margin-right: 15px;
    text-align: center;
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

export default function MainApp() {
  let usersName = ["Alina", "Sabrina", "Alex", "Jack", "Anna"];
  let videoLinks = [
    "http://media.w3.org/2010/05/bunny/trailer.mp4",
    "http://media.w3.org/2010/05/sintel/trailer.mp4",
    "http://media.w3.org/2010/05/bunny/trailer.mp4",
    "http://media.w3.org/2010/05/video/movie_300.webm",
    "http://media.w3.org/2010/05/sintel/trailer.mp4",
  ];
  const [reactions, setReactions] = useState([
    { heart: 13, beer: 34 },
    { heart: 0, beer: 0 },
    { heart: 0, beer: 0 },
    { heart: 0, beer: 0 },
    { heart: 0, beer: 0 },
  ]);
  // const [heart, setHeart] = useState(0);
  const [currentUser, setCurrentUser] = useState(0);
  const [player, setPlayer] = useState();

  return (
    <Body>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <StyledSegment
              style={{ padding: 0, maxHeight: 354, overflow: "hidden" }}
            >
              <Player>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              </Player>
            </StyledSegment>
          </Grid.Column>
          <Grid.Column width={8}>
            <StyledSegment
              style={{ padding: 0, maxHeight: 354, overflow: "hidden" }}
            >
              <Player
                ref={(player) => {
                  setPlayer(player);
                }}
              >
                <source src={videoLinks[currentUser]} />
              </Player>
            </StyledSegment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={7}>
            <Tabs />
          </Grid.Column>
          <Grid.Column width={2}>
            <FlexBox
              alignItems="center"
              justifyContent="center"
              style={{ marginTop: 20 }}
            >
              <img src={Logo} alt="logo-app" style={{ width: "100%" }} />
            </FlexBox>
          </Grid.Column>
          <Grid.Column width={7}>
            <FlexBox justifyContent="flex-end">
              <StyledButton
                onClick={() => {
                  if (currentUser < 4) {
                    setCurrentUser(currentUser + 1);
                  } else {
                    setCurrentUser(0);
                  }
                  player.load();
                }}
              >
                Next
              </StyledButton>
              <StyledLabel size="big">{usersName[currentUser]}</StyledLabel>
              <StyledLabel size="big" style={{ width: 300 }}>
                2500 Viewers
              </StyledLabel>
              <StyledIconButton
                circular
                onClick={(e) => {
                  setReactions((reactions) => {
                    const updatedReactions = reactions;
                    updatedReactions[currentUser] = {
                      ...updatedReactions[currentUser],
                      heart: updatedReactions[currentUser].heart + 1,
                    };
                    return updatedReactions;
                  });
                }}
              >
                <Icon
                  name="heart"
                  color="red"
                  size="large"
                  style={{ margin: 0, padding: 0, marginTop: -45 }}
                />
                <LabelCount>{reactions[currentUser].heart}</LabelCount>
              </StyledIconButton>
              <StyledIconButton
                circular
                onClick={() => {
                  reactions[currentUser].beer = reactions[currentUser].beer + 1;
                  console.log(reactions);
                }}
              >
                <Icon
                  name="beer"
                  size="large"
                  color="red"
                  style={{
                    margin: 0,
                    padding: 0,
                    marginTop: -45,
                    marginLeft: 5,
                  }}
                />
                <LabelCount>{reactions[currentUser].beer}</LabelCount>
              </StyledIconButton>
            </FlexBox>
            <StyledSegment
              style={{
                backgroundColor: "transparent",
                padding: 0,
                maxHeight: 200,
                overflowY: "hidden",
                boxShadow: "none",
              }}
            >
              <img
                src={NextDancer}
                alt="next-dancer"
                style={{ width: "90%", height: 200 }}
              />
              {/* <FlexBox>
                <Image src="" />
                <DancerHeading>NEXT DANCER</DancerHeading>
              </FlexBox>
              <ProgressCard /> */}
            </StyledSegment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Body>
  );
}
