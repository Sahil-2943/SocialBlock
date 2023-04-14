import React from "react";

function About(){
    return (
        <div className="mt-28 md:mt-20 ">
            <div  className="flex md:p-16 justify-evenly flex-col lg:flex-row">
                <div className="text-center flex justify-center p-8 lg:p-10">
                    <img src={Image} className="avatar rounded-full mx-auto" class="avatar" alt="My_Img"/>
                </div>
                <div className="p-10 lg:p-20 mt-7 text lg:w-1/2 flex gap-y-2 flex-col">
                    <h2 className="text-4xl font-medium  text-slate-50 text-left m-3">ABOUT BLOCKSOCIAL</h2>
                    <p className="text-2xl text-slate-300 text-left m-2">
                    BlockSocial takes social media to the next level with its integration of Web3 technologies, 
                    offering a user-centric, privacy-focused, community-driven, and creator-friendly platform. 
                    Join BlockSocial today and experience a new era of social networking 
                    where you are in control of your data, your community, and your online presence.
                    </p>
                </div>
            </div>
            {/* <div  className="flex justify-center p-4 text">
                    <h1 className="flex text-4xl font-medium text-slate-900 dark:text-slate-50">TECH USED</h1> 
            </div> */}
            {/* <div className="flex justify-center p-4 gap-10 flex-wrap m-10">
                    <img src={html5} alt=""  className="icon w-16 h-16 grayscale hover:grayscale-0 dark:grayscale-0" />
                    <img src={css3} alt=""  className="icon w-16 h-16 grayscale hover:grayscale-0 dark:grayscale-0" />
                    <img src={js} alt=""  className="icon w-16 h-16 grayscale hover:grayscale-0 dark:grayscale-0" />
                    <img src={node} alt=""  className="icon w-16 h-16 grayscale hover:grayscale-0 dark:grayscale-0" />
                    <img src={rct} alt=""  className="icon w-16 h-16 grayscale hover:grayscale-0 dark:grayscale-0" />
                    <img src={mongo} alt=""  className="icon w-16 h-16 grayscale hover:grayscale-0 dark:grayscale-0" />
            </div> */}
        </div>
    );
}

export default About;