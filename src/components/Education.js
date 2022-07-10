import React, { Component } from "react";
import {  HashLink as Link } from 'react-router-hash-link';


 export default class Education extends Component {
    render() {
        return(
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6>
                            <strong>EDUCATION</strong>
                        </h6>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Certificate</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Web Development</td>
                                    <td>Feb 2016</td>
                                    <td><Link to= "#" className="btn blue lighten-2">
                                        View
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </div>
            </div>
        );
    }
}

