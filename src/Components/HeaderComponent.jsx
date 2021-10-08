import React from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                
                <div className="navbar">
                <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
                <Link to="/blog" style={{textDecoration: 'none'}}>Blog</Link>
                <Link to="/resume" style={{textDecoration: 'none'}}>Resume</Link>
                </div>
            </div>
            
        )
    }
}

export default HeaderComponent