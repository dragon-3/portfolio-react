import React from 'react';
import {withRouter} from 'react-router' 
import { Link } from 'react-router-dom';


class BlogComponent extends React.Component {
    render() {
        return (
            <div className="blog-component">

                <div className="blog-intro">
                    <h1>Blog: Thoughts on Life in general, and as a Front End Developer.</h1>
                </div>

                <div className="blog-hr-one">
                    <hr />
                </div>


                <div className="blog-box">
                    <div className="blog-content">
                        <h3>Latest Blog Posts:</h3><br />
                        <p>Oct 10, 2021</p>
                        <h2>New Portfolio Website Out!</h2><br />
                        <h4><Link to="/blog/1" style={{textDecoration: 'none'}}>Read More ➡</Link> </h4>
                    </div>
                    <hr />
                </div>

            </div>
            
        )
    }
}

export default BlogComponent