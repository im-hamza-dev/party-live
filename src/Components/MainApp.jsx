import React, { useState, useEffect } from "react";
import { Grid, Image, Label, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import StyledSegment from "./Common/StyledSegment";
import { Player, BigPlayButton } from "video-react";
import FlexBox from "./Common/FlexBox";
import background from "../Assets/images/bg1.png";
import NextDancer from "../Assets/images/nextDancer.png";
import Logo from "../Assets/images/logo.png";
import ReactionsBar from "./ReactionsBar";
import Tabs from "./Tabs";
import WebCam from "./WebCam";
import AnimatedNumber from "animated-number-react";
import showImage from "../Assets/images/backShow.png";
import HeartBox from "./CountBox/HeartBox";
import BeerBox from "./CountBox/BeerBox";
// import DJVideo from "../Assets/videos/dj.mp4";
// import video1st from "../Assets/videos/1st.mp4";
// import video2nd from "../Assets/videos/2nd.mp4";
// import video3rd from "../Assets/videos/3rd.mp4";
// import video5th from "../Assets/videos/5th.mp4";
import ProgressCard from "./ProgressCard";
import beerColor from "../Assets/images/beerColor.png";

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
  width: 50px !important;
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
  margin-top: -45px;
  margin-left: 18px;
  position: absolute;
  font-size: 13px;
  width: 35px;
  padding: 3px 5px;
  font-family: poppins;
  font-weight: 500;
  color: white;
  background-image: linear-gradient(50deg, #ff4af9, #71cdff);
  box-shadow: 0px 0px 5px #ba7ac0;
`;
// const DancerHeading = styled.div`
//   font-size: 30px;
//   font-family: poppins;
//   font-weight: 600;
//   color: white;
//   width: 100px;
//   line-height: 30px;
// `;
const StyledLogoButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
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
const TimerBox = styled.div`
  border-radius: 15px;
  background-image: linear-gradient(50deg, #ff4af9, #71cdff);
  width: 110px;
  padding: 25px 30px 25px 32px;
  font-size: 30px;
  font-weight: 800;
  color: white;
  position: absolute;
  margin-top: 10px;
  margin-right: 10px;
  text-align: center;
`;

export default function MainApp() {
  let usersName = ["Peter", "Sabrina", "Alex", "You", "Anna"];
  let heart = [35, 22, 17, 23, 14];
  let beer = [115, 187, 175, 225, 207];
  // let videoLinks = [video1st, video2nd, video3rd, video1st, video5th];
  let videoLinks = [
    "https://res.cloudinary.com/party-live/video/upload/q_auto/v1595529253/1st_kgj5cl.mp4",
    "https://res.cloudinary.com/party-live/video/upload/q_auto/v1595529268/2nd_ygeb4b.mp4",
    "https://res.cloudinary.com/party-live/video/upload/q_auto/v1595529260/3rd_h9sj7v.mp4",
    "https://res.cloudinary.com/party-live/video/upload/q_auto/v1595529253/1st_kgj5cl.mp4",
    "https://res.cloudinary.com/party-live/video/upload/q_auto/v1595529265/5th_rdhzzz.mp4",
  ];
  const [currentUser, setCurrentUser] = useState(0);
  const [player, setPlayer] = useState();
  const [djPlayer, setDjPlayer] = useState();
  const [programFlow, setProgramFlow] = useState(false);
  const [timerPush, setPush] = useState(0);
  const formatValue = (value) => value.toFixed(0);
  const [duplicate, setDuplicate] = useState(true);
  const [firstHeart, setFirstHeart] = useState(0);
  const [firstBeer, setFirstBeer] = useState(0);

  useEffect(() => {
    if (currentUser === 5) {
      window.location.reload();
    } else if (programFlow) {
      console.log(currentUser);
      if (currentUser !== 3 && player) {
        player.load();
        player.play();
      }
      setTimeout(() => {
        setCurrentUser(currentUser + 1);
      }, 15000);
    }
  }, [programFlow, currentUser, player]);

  useEffect(() => {
    if (currentUser === 2) {
      // console.log("entered");
      setTimeout(() => {
        if (duplicate === true) {
          setPush(1);
          console.log("timerStarting");
          setTimerText();
        }
        // setShowImgFlag(0);
      }, 5000);
    }
  }, [timerPush, currentUser]);

  // useEffect(() => {
  //   if (currentUser === 2) {
  //     setTimeout(() => {
  //       setShowImgFlag(true);
  //     }, 5000);
  //   }
  // });

  const setTimerText = async () => {
    var timeleft = 10;
    setDuplicate(false);

    const t = await setInterval(function () {
      timeleft--;
      if (timeleft >= 0) {
        document.getElementById("timer").textContent = timeleft;
      } else {
        setPush(0);
      }
      if (timeleft < 1) {
        clearInterval(t);
        setPush(0);
      }
      // setPush(false);
    }, 1000);
  };

  return (
    <Body>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <StyledSegment
              style={{
                display: "flex",
                alignItems: "center",
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
                <source src="https://res.cloudinary.com/party-live/video/upload/q_auto/v1595529263/dj_vl1ao4.mp4" />
              </Player>
              <Image
                src={showImage}
                style={{
                  // marginTop: -380,
                  opacity: timerPush - 0.3,
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                }}
              />
            </StyledSegment>
          </Grid.Column>
          <Grid.Column width={8}>
            <StyledSegment
              style={{
                alignItems: "flex-start",
                display: "flex",
                justifyContent: "flex-end",
                padding: 0,
                maxHeight: 300,
                overflow: "hidden",
              }}
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
              <TimerBox id="timer" style={{ opacity: timerPush }}>
                1 0
              </TimerBox>
            </StyledSegment>

            <div
              style={{
                position: "absolute",
                width: "100%",
                marginTop: -70,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ReactionsBar />
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ padding: 0 }}>
          <Grid.Column width={7}>
            <Tabs currentUser={currentUser} />
          </Grid.Column>
          <Grid.Column width={2}>
            <FlexBox
              alignItems="center"
              justifyContent="center"
              style={{ marginTop: 20 }}
            >
              <StyledLogoButton
                style={{
                  padding: 0,
                  borderRadius: "50%",
                  margin: 0,
                }}
                disabled={programFlow === true}
                onClick={() => {
                  setFirstHeart(35);
                  setFirstBeer(115);
                  djPlayer.play();
                  setProgramFlow(true);
                }}
              >
                <img src={Logo} alt="logo-app" style={{ width: "100%" }} />
              </StyledLogoButton>
            </FlexBox>
          </Grid.Column>
          <Grid.Column width={7}>
            <FlexBox justifyContent="flex-end">
              {/* <StyledButton
                disabled={programFlow === true}
                onClick={() => {
                  djPlayer.play();
                  setProgramFlow(true);
                }}
              >
                Play
              </StyledButton> */}
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
                2453 Viewers
              </StyledLabel>
              <StyledIconButton>
                <Icon
                  name="heart"
                  color="red"
                  size="large"
                  style={{ margin: 0, padding: 0 }}
                />
                <LabelCount>
                  {/* {currentUser === 0 && (
                    <AnimatedNumber
                      value={firstHeart}
                      formatValue={formatValue}
                      easing="linear"
                      duration={15000}
                    />
                  )}
                  {currentUser === 1 && (
                    <AnimatedNumber
                      value={heart[1]}
                      formatValue={formatValue}
                      easing="linear"
                      duration={15000}
                    />
                  )}
                  {currentUser === 2 && (
                    <AnimatedNumber
                      value={heart[2]}
                      formatValue={formatValue}
                      easing="linear"
                      duration={15000}
                    />
                  )}
                  {currentUser === 3 && (
                    <AnimatedNumber
                      value={heart[3]}
                      formatValue={formatValue}
                      easing="linear"
                      duration={15000}
                    />
                  )}
                  {currentUser === 4 && (
                    <AnimatedNumber
                      value={heart[4]}
                      formatValue={formatValue}
                      easing="linear"
                      duration={15000}
                    />
                  )} */}
                  <HeartBox
                    currentUser={currentUser}
                    programFlow={programFlow}
                  />
                </LabelCount>
              </StyledIconButton>
              <StyledIconButton>
                <img
                  src={beerColor}
                  alt="beer"
                  style={{ width: 30, marginLeft: 5, marginTop: -5 }}
                />
                <LabelCount style={{ marginTop: -51 }}>
                  {/* {currentUser === 0 && (
                    <AnimatedNumber
                      value={firstBeer}
                      formatValue={formatValue}
                      easing="linear"
                      duration={15000}
                    />
                  )}
                  {currentUser === 1 && (
                    <AnimatedNumber
                      value={beer[1]}
                      formatValue={formatValue}
                      easing="linear"
                      duration={15000}
                    />
                  )}
                  {currentUser === 2 && (
                    <AnimatedNumber
                      value={beer[2]}
                      formatValue={formatValue}
                      easing="linear"
                      duration={15000}
                    />
                  )}
                  {currentUser === 3 && (
                    <AnimatedNumber
                      value={beer[3]}
                      formatValue={formatValue}
                      easing="linear"
                      duration={15000}
                    />
                  )}
                  {currentUser === 4 && (
                    <AnimatedNumber
                      value={beer[4]}
                      formatValue={formatValue}
                      easing="linear"
                      duration={15000}
                    />
                  )} */}
                  <BeerBox
                    currentUser={currentUser}
                    programFlow={programFlow}
                  />
                </LabelCount>
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
                border: "1px solid white",
                marginTop: 10,
              }}
            >
              <img
                src={NextDancer}
                alt="next-dancer"
                style={{ width: "50%", marginTop: 10 }}
              />
              <ProgressCard />
            </StyledSegment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Body>
  );
}
