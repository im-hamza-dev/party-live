import React from "react";

export default function TabPanes(props) {
  console.log(props.index);
  if (props.index === 0) {
    return (
      <img
        style={{ width: "100%" }}
        src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg"
        alt="component-01"
      />
    );
  } else if (props.index === 1) {
    return (
      <img
        style={{ width: 640 }}
        src="https://www.itl.cat/pngfile/big/5-55779_green-nature-dual-monitor-desktop-desktop-images-wallpaper.jpg"
        alt="component-02"
      />
    );
  } else if (props.index === 2) {
    return (
      <img
        style={{ width: 640 }}
        src="https://hdwallpaperz.net/wp-content/uploads/2017/01/Images-9.jpg"
        alt="component-03"
      />
    );
  } else {
    return <div>nothin</div>;
  }
}
