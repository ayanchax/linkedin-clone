import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://i.pinimg.com/originals/73/23/c1/7323c115f85c7d6653337e020b9180ae.png" alt="" />
        <Avatar
          className="sidebar__avatar"
          className="https://lh3.googleusercontent.com/a-/AOh14Gj4zE9yHsoBriErUebkmDlq2CUfcu30Ql72DiOaAdA=s96-c"
          src="https://lh3.googleusercontent.com/a-/AOh14Gj4zE9yHsoBriErUebkmDlq2CUfcu30Ql72DiOaAdA=s96-c"
        />
        <h2>Ayan Chax</h2>
        <h4>ayanchax9088@gmail.com</h4>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2,543</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">123</p>
          </div>
        </div>
      </div>

      <div className="sidebar__bottom">
          <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
