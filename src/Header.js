import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src='static/images/logo/logo_480x480.png' alt="logo" />

        <div className="header__search">
            <SearchIcon/>
            <input type="text" className=""/>
        </div>
      </div>
      
      <div className="header__right">
          <HeaderOption Icon={HomeIcon} title='Home'/>
          <HeaderOption Icon={SupervisorAccountIcon} title='My network'/>
          <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
          <HeaderOption Icon={MailOutlineIcon} title='Messaging'/>
          <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
          <HeaderOption avatar='https://lh3.googleusercontent.com/a-/AOh14Gj4zE9yHsoBriErUebkmDlq2CUfcu30Ql72DiOaAdA=s96-c'
            title='me'/>
      </div>
    </div>
  );
}

export default Header;
