import React from "react";
import Friends from "../../Assets/images/friends.png";
import Message from "../../Assets/images/message.png";
import Ranking from "../../Assets/images/ranking.png";

export default function TabPanes(props) {
  // console.log(props.index);
  if (props.index === 0) {
    return <img style={{ width: "100%" }} src={Message} alt="component-01" />;
  } else if (props.index === 1) {
    return <img style={{ width: "100%" }} src={Ranking} alt="component-02" />;
  } else if (props.index === 2) {
    return <img style={{ width: "100%" }} src={Friends} alt="component-03" />;
  } else {
    return <div>nothin</div>;
  }
}
