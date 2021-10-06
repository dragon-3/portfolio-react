import logo from './logo.svg';
import './App.css';
import HomeComponent from './HomeComponent';
import HeaderComponent from './HeaderComponent';
import BlogComponent from './BlogComponent';
import MainComponent from './MainComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
          <MainComponent />
      
    </div>
  );
}

export default App;
