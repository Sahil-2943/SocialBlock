import { React,useState } from "react";
import {Link} from "react-router-dom";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function Header(){

//     const [darkMode,setDarkMode] = useState(false);
//     const [toggle,setToggle] = useState(false);
//     const HTML = document.querySelector("html");
//     // const to = document.querySelector(".to");
//     let ib = toggle ? <MenuIcon /> : <CloseIcon />;

//     function handleClick(){
//         if(!darkMode){
//             document.body.style.backgroundColor = "#141619";
//             HTML.classList.add("dark");
//         }
//         if(darkMode){
//             document.body.style.backgroundColor = "aliceblue";
//             HTML.classList.remove("dark");
//         }

//         setDarkMode((prevValue) => {
//             return !prevValue;
//         })
//     }
//     function onToggle(){
//         setToggle((prevValue) => {
//             return !prevValue;
//         })
//     } 
    return (<header className="z-10 flex fixed w-full justify-center mb-96 md:mb-16 lg:mb-12 backdrop-filter backdrop-blur-lg bg-opacity-30 top-0">
        <div className="nav inline-block lg:flex justify-between p-7 shadow-xl bg-gradient-to-r from-sky-200 to-sky-200 w-full flex-wrap">
            <div className="flex justify-between">
                <a href="./" className="flex title items-center ml-1 md:ml-3 lg:ml-10 text-slate-800 text-xl sm:text-2xl md:text-3xl">BlockSocial</a>
                <IconButton onClick={onToggle} className="visible lg:invisible sm:mr-16">{ib}</IconButton>
            </div>
             {/* {toggle ? <div></div> : <IconButton onClick={onToggle} className="to visible lg:invisible "><CloseIcon /></IconButton>} */}
            {toggle ? <div></div> : <ul className="links flex gap-y-1 gap-x-10 lg:gap-x-6 items-center mr-3 lg:mr-10 flex-col lg:flex-row mt-3 md:mt-0">
                <li className="link text-slate-800 hover:text-2xl hover:underline hover:underline-offset-14 hover:transition-all decoration-sky-900 lg:visible"><a href="/">Home</a></li>
                <li className="link text-slate-800 hover:text-2xl hover:underline hover:underline-offset-14 hover:transition-all decoration-sky-900 "><a href="/">About</a></li>
                <li className="link text-slate-800 hover:text-2xl hover:underline hover:underline-offset-14 hover:transition-all decoration-sky-900 "><a href="/">Contact</a></li>
                {/* <IconButton onClick={handleClick}>{darkMode ?<LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}</IconButton> */}
            </ul>}
            {/* <IconButton onClick={onToggle} className="to visible lg:invisible ">{ib}</IconButton> */}
        </div>
    </header>)
}

export default Header;
