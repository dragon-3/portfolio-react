import React from 'react';
import {withRouter} from 'react-router' 


class ResumeComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="name-title">
                    <h1>Sean Narron</h1>
                    <h2>Front End Developer</h2>
                </div>
                <div className="resume-box">
                    <div className="resume-intro">
                        <p>Junior Front End Developer with 2 years experience in Web Development.</p>
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