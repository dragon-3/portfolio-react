import React from 'react';
import profile from './portfolio-photo.JPG';


class HomeComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="intro-box"> 
                    <div className="intro">
                        <h1>Hello, my name is Sean. I am a Junior Front End Developer. </h1>
                    </div>
                    <div className="profile-photo">
                        <img src={profile} />
                    </div>
                </div>
                <div className="about">
                    <h4>About:</h4>
                    <p>I'm currently working as a Front End Engineer for an Asian company, mainly using programming languages such as Javascript and frameworks like React. Building and designing the User Interface has become one of my passions since we are so interconnected through the internet. I'm also working on projects like CRUD apps not only using Frontend tools, but also with some backend languages/frameworks. Check my Github account <a href="https://github.com/dragon-3">here</a>.   </p>
                </div>
                <div className="skills">
                    <h4>Skills:</h4>
                    <p>I'm currently working as a Front End Engineer for an Asian company, mainly using programming languages such as Javascript and frameworks like React. Building and designing the User Interface has become one of my passions since we are so interconnected through the internet. </p>
                </div>
                <div className="about">
                    <h4>About:</h4>
                    <p>I'm currently working as a Front End Engineer for an Asian company, mainly using programming languages such as Javascript and frameworks like React. Building and designing the User Interface has become one of my passions since we are so interconnected through the internet. </p>
                </div>
            </div>
            
        )
    }
}

export default HomeComponent