import React, { useState, useEffect } from "react";
import { Grid, Image, Label, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import StyledSegment from "./Common/StyledSegment";
import { Player, BigPlayButton } from "video-react";
import FlexBox from "./Common/FlexBox";
import background from "../Assets/images/bg1.png";
import NextDancer from "../Assets/images/nextDancer.png";
import Logo from "../Assets/images/logo.png";
// import ProgressCard from "./ProgressCard";
import Tabs from "./Tabs";
import WebCam from "./WebCam";

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
  width: 80px !important;
  height: 50px !important;
  padding: 0px !important;
  border-radius: 50% !important;
  margin-left: 15px !important;
  box-shadow: 0px 0px 5px #ba7ac0 !important;
  background-color: white !important;
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
  const [heart, setHeart] = useState(0);
  const [beer, setBear] = useState(0);
  const [currentUser, setCurrentUser] = useState(0);
  const [player, setPlayer] = useState();
  const [djPlayer, setDjPlayer] = useState();
  const [programFlow, setProgramFlow] = useState(false);

  useEffect(() => {
    // player.subscribeToStateChange(handleStateChange());
    // if (player) {
    //   if (player.getState().player.currentTime === 5) {
    //     setCurrentUser(currentUser + 1);
    //     player.load();
    //   }
    // }
    if (currentUser === 5) {
      // setCurrentUser(0);
      // player.load();
      // djPlayer.load();
      // setProgramFlow(false);
      window.location.reload();
    } else if (programFlow) {
      console.log(currentUser);

      if (currentUser !== 3 && player) {
        player.load();
        player.play();
      }
      setTimeout(() => {
        setCurrentUser(currentUser + 1);
      }, 13000);
    }
  });

  return (
    <Body>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <StyledSegment
              style={{
                padding: 0,
                maxHeight: 300,
                overflow: "hidden",
              }}
            >
              <Player
                ref={(player) => {
                  setDjPlayer(player);
                }}
              >
                <BigPlayButton disabled />
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              </Player>
            </StyledSegment>
          </Grid.Column>
          <Grid.Column width={8}>
            <StyledSegment
              style={{ padding: 0, maxHeight: 300, overflow: "hidden" }}
            >
              {currentUser === 3 ? (
                <WebCam />
              ) : (
                <Player
                  ref={(player) => {
                    setPlayer(player);
                  }}
                  // autoPlay
                >
                  <BigPlayButton disabled />
                  <source src={videoLinks[currentUser]} />
                </Player>
              )}
            </StyledSegment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ padding: 0 }}>
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
                disabled={programFlow === true}
                onClick={() => {
                  djPlayer.play();
                  setProgramFlow(true);
                }}
              >
                Play
              </StyledButton>
              {/* <StyledButton
                onClick={() => {
                  if (currentUser < 4) {
                    setCurrentUser(currentUser + 1);
                  } else {
                    setCurrentUser(0);
                  }
                  // console.log(player.getState().player.currentTime);
                  player.load();
                }}
              >
                Next
              </StyledButton> */}
              <StyledLabel size="big">{usersName[currentUser]}</StyledLabel>
              <StyledLabel size="big" style={{ width: 300 }}>
                2500 Viewers
              </StyledLabel>
              <StyledIconButton
                onClick={(e) => {
                  setHeart(heart + 1);
                  // setReactions((reactions) => {
                  //   const updatedReactions = reactions;
                  //   updatedReactions[currentUser] = {
                  //     ...updatedReactions[currentUser],
                  //     heart: updatedReactions[currentUser].heart + 1,
                  //   };
                  //   return updatedReactions;
                  // });
                }}
              >
                <Icon
                  name="heart"
                  color="red"
                  size="large"
                  style={{ margin: 0, padding: 0, marginTop: -15 }}
                />
                <LabelCount>{heart}</LabelCount>
              </StyledIconButton>
              <StyledIconButton
                onClick={() => {
                  setBear(beer + 1);
                  // reactions[currentUser].beer = reactions[currentUser].beer + 1;
                }}
              >
                <Icon
                  name="beer"
                  size="large"
                  color="red"
                  style={{
                    margin: 0,
                    padding: 0,
                    marginLeft: 5,
                    marginTop: -15,
                  }}
                />
                <LabelCount>{beer}</LabelCount>
              </StyledIconButton>
            </FlexBox>
            <StyledSegment
              style={{
                backgroundColor: "transparent",
                padding: 0,
                margin: 0,
                maxHeight: 280,
                overflowY: "hidden",
                boxShadow: "none",
              }}
            >
              <img
                src={NextDancer}
                alt="next-dancer"
                style={{ width: "100%" }}
              />
            </StyledSegment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Body>
  );
}
