import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import "../index.css"; 

function Footer(){
    return (
        <footer className="bg-gradient-to-r from-cyan-700 to-blue-900 mt-10 flex justify-center flex-col">
            <div className="flex justify-center rounded-full"><a href="/"><GitHubIcon class="social"/></a></div>
            <div>
                <p className="text-slate-300">Copyright © 2023 BlockSocial</p>
            </div>
        </footer>
    )
}

export default Footer;