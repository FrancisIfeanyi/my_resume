import React, { Component } from "react";

export default class About extends Component {
    render() {
        return(
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6 className='mt-bottom'>
                            <strong>ABOUT ME</strong>
                        </h6>
                        <p className="azure brown-text">
                        I am a focused achiever that has the tenacity to 
                        work on inspiring projects with the 
                        hope of being the best team-player in order 
                        to achieve collective institutional goals.
                        </p>
                    </div>
                    <div className="card-action">
                        <h6>
                            <strong>PERSONAL INFO</strong>
                        </h6>
                        <div className="row-mt">
                            <div className="col s12 m6 l6 x16">
                                <p>
                                    <strong>Adress:</strong> 42, Marina rd
                                    </p>
                                <p>
                                    <strong>Email:</strong> odorifeanyi@gmail.com
                                    </p>
                                <p>
                                    <strong>Phone No:</strong> +2348063989006
                                </p>
                            </div>
                            <div className="s12 m6 l6 x16">
                                <p>
                                    <strong>Race:</strong> Black African/American
                                    </p>
                                <p>
                                    <strong>Main Language:</strong> English
                                    </p>
                                <p>
                                    <strong>Second Language:</strong> French
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}