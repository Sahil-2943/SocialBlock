import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from '@mui/material';

function Sidebar() {

  return (
    <div className="flex p-10 bg-gradient-to-t from-sky-700 to-blue-700 flex-col w-1/3">
      <div className="mt-10 mb-10 flex gap-y-20 p-3">
        <TwitterIcon size="large" className="sidebar__twitterIcon" />
      </div>
      <div className="flex gap-y-7 w-full flex-col">
        <SidebarOption Icon={HomeIcon} text="Home" onPress={"/"}/>
        {/* <SidebarOption Icon={SearchIcon} text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOption Icon={ListAltIcon} text="Lists"/> */}
        <SidebarOption Icon={PermIdentityIcon} text="Profile" onPress={"/profile"}/>
        <SidebarOption Icon={MoreHorizIcon} text="More" onPress={"/contact"} />

        {/* Button -> Tweet */}
        {/* <Button variant="outlined" className="sidebar__tweet" fullWidth>
          Tweet
        </Button> */}
      </div>
    </div>
  );
}

export default Sidebar;