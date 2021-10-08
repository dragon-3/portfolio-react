import React from 'react';
import profile from '../portfolio-photo.JPG';


class HomeComponent extends React.Component {
    render() {
        return (
            <div className="home-component">
                <div className="intro-box"> 
                    <div className="intro">
                        <h1>Hello, my name is Sean. I am a Junior Front End Developer. </h1>
                    </div>
                    <div className="profile-photo">
                        <img src={profile} />
                    </div>
                </div>

                <div className="about">
                    <h3>About:</h3>
                    <p>I'm currently working as a Front End Engineer for an Asian company, 
                        mainly using programming languages such as Javascript and frameworks 
                        like React. Building and designing the User Interface has become one 
                        of my passions since we are so interconnected through the internet. 
                        I'm also working on projects like CRUD apps not only using Frontend 
                        tools, but also with some backend languages/frameworks. 
                        Check my Github account <a href="https://github.com/dragon-3">here</a>.  
                    </p>

                    <p>Other project URLs: <br />
                    <a href="https://seannarron.com/hokuriku/">https://seannarron.com/hokuriku/</a><br />
                    <a href="https://yushirom.com/">https://yushirom.com/</a>
                    </p>
                </div>

                <div className="skills">
                    <h3>Skills:</h3>
                    <p>・Able to create User Interfaces using <strong>Javascript</strong> and <strong>React</strong></p>
                    <p>・Deep understanding of basic <strong>front-end technologies</strong></p>
                    <p>・Experience in building <strong>SPAs</strong> with <strong>Restuful APIs</strong></p>
                    <p>・Basics of <strong>Databases and SQL</strong></p>
                </div>

                <hr />

                <div className="contact">
                    <h1>Interested in doing something together? </h1>
                    <div className="contact-box">
                        <h3><a href="mailto:seannarron9@gmail.com">Email Me ➡</a></h3>
                    </div>
                </div>

                <hr />

                <div className="copyright">
                    <h3>Copyright Sean Narron 2021</h3>
                </div>
            </div>
            
        )
    }
}

export default HomeComponent