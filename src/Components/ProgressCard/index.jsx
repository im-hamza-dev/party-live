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
  width: 120px;
  height: 90px;
  margin-bottom: 5px;
`;
// const StyledStep = styled(Step)`
//   &&&& {
//     // border-radius: 10px;
//     background-color: transparent;
//   }
// `;
const UserItem = styled(FlexBox)`
  background-color: #5daaf4;
  border-radius: 10px;
  padding: 0px;
  margin-right: 10px;
`;
const Name = styled.div`
  color: white;
  margin-bottom: 5px;
`;

export default function ProgressCard() {
  return (
    <>
      <FlexBox
        alignItems="center"
        justifyContent="space-between"
        style={{
          width: "95%",
          margin: "auto",
          padding: 0,
          paddingBottom: 30,
          paddingTop: 10,
        }}
      >
        <UserItem flexDirection="column" alignItems="center">
          <StyledImage src={First} />
          <Name>Alina</Name>
        </UserItem>
        <UserItem flexDirection="column" alignItems="center">
          <StyledImage src={Second} />
          <Name>Sabrina</Name>
        </UserItem>
        <UserItem flexDirection="column" alignItems="center">
          <StyledImage src={Third} />
          <Name>Alex</Name>
        </UserItem>
        <UserItem flexDirection="column" alignItems="center">
          <StyledImage src={You} />
          <Name>You</Name>
        </UserItem>
        <UserItem flexDirection="column" alignItems="center">
          <StyledImage src={Fifth} />
          <Name>Anna</Name>
        </UserItem>
      </FlexBox>
    </>
  );
}
