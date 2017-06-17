import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import About from './About';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

ReactDOM.render(
    <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <App />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
    , document.getElementById('root'));
registerServiceWorker();

/*setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}, 10000)
*/