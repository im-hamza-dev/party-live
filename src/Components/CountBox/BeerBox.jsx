import React from "react";
import { useEffect } from "react";

export default function BeerBox(props) {
  let beer = [115, 187, 175, 225, 207];

  useEffect(() => {
    document.getElementById("tagNoBeer").textContent = Math.floor(0);

    if (props.programFlow) {
      console.log("started");
      let mini = 0;
      const t = setInterval(function () {
        let arr = [];
        for (
          let i = 0;
          i <= beer[props.currentUser];
          i += beer[props.currentUser] / 5
        ) {
          arr.push(i);
        }
        console.log(arr);
        console.log(mini);
        document.getElementById("tagNoBeer").textContent = Math.floor(
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
      <div id="tagNoBeer">0</div>
    </>
  );
}
