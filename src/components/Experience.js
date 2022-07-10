import React, { Component } from "react";

export default class Experience extends Component {
    render() {
        return(
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6><strong>EXPERIENCES</strong></h6>
                        <div className="row">
                            <div className="col s8 m4 l4 x10">
                                <p className="teal year_exp white-text">
                                    Feb
                                    <strong>2016</strong> - May
                                    <strong>2020</strong>
                                </p>
                            </div>
                            <div className="col s18 m4 l8 x16">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>WEB DEVELOPER</strong>
                                    </h6>
                                    <p>
                                        functional knowledge of HTML, CSS and Javascript for
                                         building responsive websites. 
                                        I have worked with SLOT SYSTEMS LTD 
                                        in capacity of Software Engineer/ TEchnical department.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                         <div className="row">
                            <div className="col s10 m12 l4 x6">
                                <p className="teal year_exp white-text">
                                    May
                                    <strong>2020</strong> - June
                                    <strong>2022</strong>
                                </p>
                            </div>
                            <div className="col s18 m4 l8 x16">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>FULL STACK DEVELOPER/PRODUCT DESIGN</strong>
                                    </h6>
                                    <p>
                                        Intermediate level Product designer using Figma and Full stack Developer with functional knowledge of 
                                        ReactNative, Node.js, and PHP to build creative solutions for Small-scale and Medium Businesses in Fintech, Agriculture and Medical sectors.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}