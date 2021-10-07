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
            </div>
            
        )
    }
}

export default HomeComponent