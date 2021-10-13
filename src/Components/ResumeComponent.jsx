import React from 'react';
import {withRouter} from 'react-router' 


class ResumeComponent extends React.Component {
    render() {
        return (
            <div className="resume-component">
                <div className="name-title">
                    <h1>Sean Narron</h1>
                    <p>Front End Developer</p>
                </div>
                <div className="resume-box">
                    <div className="resume-intro">

                        <div className="intro-message">
                            <p>Junior Front End Developer with 2 years experience in Web Development. 
                                100% Self-taught and highly disciplined. Began programming career by 
                                starting out with building websites for local businesses. 
                                Looking for an opprtunity where I can hone my frontend skills, 
                                and eventually become a Senior Developer. 
                            </p>
                        </div>
                        
                        <div className="experience">
                            <h3>Experience</h3>
                            <hr />
                            <div className="job-titles">
                                <h6 id="date-1">2021-04 --
                                    present
                                </h6>
                                <h5 id="title-1">Frontend Engineer</h5>
                                <p id="item-1"><em>IT Plus, Nagoya, Japan</em> <br />
                                    ・Developed React applications for organizations in various sectors.<br />
                                    ・Provided website maintenance and enhancements based on the customer's needs<br />
                                    ・Gained experience in working on full-stack applications depending on the user's current stack (Java 
                                    Spring-Boot, Visualforce, etc).  <br />
                                </p>
                                <h6 id="date-2">2020-10 --
                                    present
                                </h6>
                                <h5 id="title-2">Web Developer</h5>
                                <p id="item-2"><em>Freelance, Huntington Beach, CA</em> <br />
                                    ・Created user and mobile-friendly websites for busineses/individuals<br />
                                    ・Maintained websites long-term using hostig services.<br />
                                    {/* ・Gained experience in working on full-stack applications depending on the user's current stack (Java 
                                    Spring-Boot, Visualforce, etc). */}  <br />
                                </p>
                                    <h6 id="date-3">2020-10 --
                                    present
                                </h6>
                                <h5 id="title-3">Content Analyst</h5>
                                <p id="item-3"><em>Google, Palo Alto, CA</em> <br />
                                    ・Responsible for analyzing google ads content based on guidelines before launching.<br />
                                    ・Kept up with constantly changing guidelines in order to be fully aware of current trends on the internet.<br />
                                    {/* ・Gained experience in working on full-stack applications depending on the user's current stack (Java 
                                    Spring-Boot, Visualforce, etc). */}  <br />
                                </p>
                                
                                
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