import React from "react";
import Header from "./Header";
import About from "./About";
// import Team from "./Team";
import Footer from "./Footer";

function Contact(){
    return (
        <div className="bg-[#141619]">
            <Header />
            <About />
            {/* <Team /> */}
            <Footer/>
            <p>Hello</p>
        </div>
    )
}
export default Contact;