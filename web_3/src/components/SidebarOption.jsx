import React from "react";
import { useState } from "react";
import "./SidebarOption.css";
import {Link} from "react-router-dom";

function SidebarOption({text, Icon, onPress}) {
  
  return (
    <div className="sidebarOption flex gap-x-5 justify-start p-4">
      <Icon className="flex mt-1"/>
      <h2 className="flex justify-center text-slate-200 text-2xl font-sans font-normal"><Link to={onPress}>{text}</Link></h2>
    </div>
  );
}

export default SidebarOption;