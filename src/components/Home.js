import React, { Component } from "react";
import About from "./About";
import Experience from "./Experience";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Education from "./Education";
import Profile from "./Profile";

export default class Home extends Component {
render(){
    return(
        <section>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col s12 m4 l3">
                        <Profile />
                    </div>
                    <div className="col s12 m8 l9">
                    <About />
                    <Skills />
                    <Experience />
                    <Portfolio />
                    <Education />
                    
                    </div>
                </div>
            </div>

        </section>
    )
}


}