import React from "react";
import LeftSidebar from "../Components/LeftSidebar";
import VideoGrid from "../Components/VideoGrid";
import PermanentDrawerRight from "../Components/PermanentDrawerRight";
// import RightSidebar from "../Components/RightSidebar";
const Meeting = () => {
  return (
    <div style={{ display: "flex", height: "100%", minHeight: "100vh" }}>
      <LeftSidebar />
      <VideoGrid />
      <PermanentDrawerRight />
      {/* <RightSidebar/> */}
    </div>
  );
};

export default Meeting;
