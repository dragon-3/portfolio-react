import React from 'react';
import HomeComponent from './HomeComponent';
import HeaderComponent from './HeaderComponent';
import BlogComponent from './BlogComponent';
import {
    BrowserRouter as Router,
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
                    <Route path="/resume" component={HomeComponent} />
                    
                    
                    
                    </Switch>
                </>
                </Router>
            </div>
            
        )
    }
}

export default MainComponent