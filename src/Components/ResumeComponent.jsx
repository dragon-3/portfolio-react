import React from 'react';
import {withRouter} from 'react-router' 


class ResumeComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="name-title">
                    <h1>Sean Narron</h1>
                    <p>Front End Developer</p>
                </div>
                <div className="resume-box">
                    <div className="resume-intro">

                        <div className="intro-message">
                            <p>Junior Front End Developer with 2 years experience in Web Development. 
                                100% Self-taught and deciplined. Began programming career by 
                                starting out with building websites for local businesses. 
                                Looking for an opprtunity where I can hone my frontend skills, 
                                and eventually become a Senior Developer. 
                            </p>
                        </div>
                        
                        <div className="experience">
                            <h3>Experience</h3>
                            <hr />
                            <div className="job-titles">
                                <h6>2021-04 -
                                    present
                                </h6>
                                <h5>Junior Front End Developer</h5>
                            </div>
                            
                        </div>
                    </div>
                    <div className="resume-info">
                        <h4>Personal Info</h4>
                        <hr />

                        <h5>Email</h5>
                        <p>seannarron9@gmail.com</p>

                        <br />

                        <h4>Skills</h4>
                        <hr />

                        <p>Willingness to learn</p>
                        <div className="right-dots">
                            <p className="dot"></p>
                            <p className="dot"></p>
                            <p className="dot"></p>
                            <p className="dot"></p>
                            <p className="dot"></p>
                        </div>

                        <p>Team player</p>
                        <div className="right-dots">
                            <p className="dot"></p>
                            <p className="dot"></p>
                            <p className="dot"></p>
                            <p className="dot"></p>
                            <p className="dot" style={{backgroundColor:"rgb(218, 214, 214)"}}></p>
                        </div>
                        
                        
                        <p>Sincerity</p>
                        <div className="right-dots">
                            <p className="dot"></p>
                            <p className="dot"></p>
                            <p className="dot"></p>
                            <p className="dot"></p>
                            <p className="dot"></p>
                        </div>
                        <p>Basic frontend stack (HTML, CSS, JS, React)</p>
                        <div className="right-dots">
                            <p className="dot"></p>
                            <p className="dot"></p>
                            <p className="dot"></p>
                            <p className="dot"></p>
                            <p className="dot" style={{backgroundColor:"rgb(218, 214, 214)"}}></p>
                        </div>
                        <p>Love for React development</p>
                        <div className="right-dots">
                            <p className="dot"></p>
                            <p className="dot"></p>
                            <p className="dot"></p>
                            <p className="dot"></p>
                            <p className="dot" style={{backgroundColor:"rgb(65, 64, 64)"}}></p>
                        </div>

                    </div>
                </div>
                
            </div>
            
        )
    }
}

export default ResumeComponent