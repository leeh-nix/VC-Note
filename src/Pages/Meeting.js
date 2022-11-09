import React from "react";
import LeftSidebar from "../Components/LeftSidebar/LeftSidebar";
import VideoGrid from "../Components/VideoGrid";

const Meeting = () => {
  return (
    <div style={{ display: "flex", height: "100%", minHeight: "100vh" }}>
      <LeftSidebar />
      <VideoGrid />
      {/* <RightSidebar/> */}
    </div>
  );
};

export default Meeting;
