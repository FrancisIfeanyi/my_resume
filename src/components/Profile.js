import React, { Component } from "react";
let Logo = require("../Images/mypic.jpg");

export default class Profile extends Component {
    render() {
        return(
            <div>
              <div className="card">
                <div className="card-image">
                    <img className="activator" src={Logo} alt="Success Ifeanyi" />
                    <div className="card-content">
                      <span className="card-title activator dark blue-text text-darken-50">
                          Success Ifeanyi
                      </span>
                      <p>Full Stack Developer</p>
                    </div>
                </div>
              </div>
            </div>
        );
    }
}
