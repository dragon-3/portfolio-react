import React from 'react';
import HomeComponent from './HomeComponent';
import HeaderComponent from './HeaderComponent';
import BlogComponent from './BlogComponent';
import ResumeComponent from './ResumeComponent';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class MainComponent extends React.Component {
    render() {
        return (
            <div>
                

                <Router>
                    
                <>
                <HeaderComponent />
                    <Switch>
                    <Route path="/" exact component={HomeComponent} />

                    <Route path="/blog" exact component={BlogComponent} />
                    <Route path="/resume" component={ResumeComponent} />
                    <Route path="/blog/1" component={HomeComponent} />
                    
                    
                    
                    </Switch>
                </>
                </Router>
            </div>
            
        )
    }
}

export default MainComponent