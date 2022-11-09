import React from "react";
import LeftSidebar from "../Components/LeftSidebar";
import VideoGrid from "../Components/VideoGrid";
import PermanentDrawerRight from "../Components/PermanentDrawerRight";
import Controls from "../Components/Controls";

const Meeting = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#141414",
      }}
    >
      <LeftSidebar />
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <VideoGrid />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "580px" }}>
            <Controls />
          </div>
        </div>
      </div>
      <PermanentDrawerRight />
    </div>
  );
};

export default Meeting;
