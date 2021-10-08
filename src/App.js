import logo from './logo.svg';
import './App.css';
import HomeComponent from './Components/HomeComponent';
import HeaderComponent from './Components/HeaderComponent';
import BlogComponent from './Components/BlogComponent';
import MainComponent from './Components/MainComponent';
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
