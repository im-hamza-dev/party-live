import React, { useState, useEffect } from "react";
import FlexBox from "../Common/FlexBox";

export default function WebCam() {
  const [live, setLive] = useState(true);
  // variable
  //   let recording = document.getElementById("recording");
  let startButton = document.getElementById("startButton");
  let stopButton = document.getElementById("stopButton");
  let downloadButton = document.getElementById("downloadButton");
  let logElement = document.getElementById("log");
  let recordingTimeMS = 5000;
  //functions
  //   function log(msg) {
  //     logElement.innerHTML += msg + "\n";
  //   }
  function wait(delayInMS) {
    return new Promise((resolve) => setTimeout(resolve, delayInMS));
  }
  //start recording
  const startRecording = (stream, lengthInMS) => {
    let recorder = new MediaRecorder(stream);
    let data = [];

    recorder.ondataavailable = (event) => data.push(event.data);
    recorder.start();
    // log(recorder.state + " for " + lengthInMS / 1000 + " seconds...");

    let stopped = new Promise((resolve, reject) => {
      recorder.onstop = resolve;
      recorder.onerror = (event) => reject(event.name);
    });

    let recorded = wait(lengthInMS).then(
      () => recorder.state === "recording" && recorder.stop()
    );
    return Promise.all([stopped, recorded]).then(() => data);
  };
  //stop input stream
  function stop(stream) {
    stream.getTracks().forEach((track) => track.stop());
    // setLive(false);
  }

  const main = () => {
    let preview = document.getElementById("preview");

    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        // console.log(preview);
        preview.srcObject = stream;

        // downloadButton.href = stream;
        preview.captureStream =
          preview.captureStream || preview.mozCaptureStream;

        return new Promise((resolve) => (preview.onplaying = resolve));
      })
      .then(() => startRecording(preview.captureStream(), recordingTimeMS))
      .then(async (recordedChunks) => {
        await preview.srcObject.getTracks().forEach((track) => track.stop());
        setLive("none");
        // stop(preview.srcObject);

        // document.getElementById("preview").id = "recording";
        let recording = document.getElementById("recording");

        // setTimeout(() => {
        let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
        recording.src = URL.createObjectURL(recordedBlob);
        // preview.load();
        // preview.srcObject = recordedBlob;
        // }, 1000);

        // preview.srcObject = recordedBlob;
        // downloadButton.href = preview.src;
        // downloadButton.download = "RecordedVideo.webm";

        // log(
        //   "Successfully recorded " +
        //     recordedBlob.size +
        //     " bytes of " +
        //     recordedBlob.type +
        //     " media."
        // );
      });
    //   .catch(log);
  };
  useEffect(() => {
    main();
  });

  return (
    <>
      {/* {live === true ? (
        <video id="preview" width="100%" height="300" autoPlay muted></video>
      ) : (
        <video id="recording" width="100%" height="300" autoPlay muted></video>
      )} */}
      <FlexBox>
        <video
          id="preview"
          width="100%"
          height="300"
          autoPlay
          muted
          style={{ display: live }}
        ></video>
        <video id="recording" width="100%" height="300" autoPlay muted></video>
      </FlexBox>
    </>
  );
}
