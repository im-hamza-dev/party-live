import React from "react";
import { useEffect } from "react";

export default function HeartBox(props) {
  let heart = [35, 22, 17, 23, 14];
  useEffect(() => {
    document.getElementById("tagNoHeart").textContent = Math.floor(0);

    if (props.programFlow) {
      console.log("started");
      let mini = 0;
      const t = setInterval(function () {
        let arr = [];
        for (
          let i = 0;
          i <= heart[props.currentUser];
          i += heart[props.currentUser] / 5
        ) {
          arr.push(i);
        }
        console.log(arr);
        console.log(mini);
        document.getElementById("tagNoHeart").textContent = Math.floor(
          arr[mini]
        );
        if (mini === 5) {
          clearInterval(t);
          mini = 0;
        } else {
          mini += 1;
        }
      }, 2200);
    }
  }, [props.currentUser, props.programFlow]);

  return (
    <>
      <div id="tagNoHeart">0</div>
    </>
  );
}
