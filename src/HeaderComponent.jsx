import React from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                
                <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/">Resume</Link>
                </div>
            </div>
            
        )
    }
}

export default HeaderComponent