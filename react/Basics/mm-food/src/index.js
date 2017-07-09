import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './home';
import Add from './add';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

ReactDOM.render(
    <Router history={customHistory}>
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">MM FOOD</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><NavLink exact activeClassName="active-nav" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active-nav" to="/add">Add Recipe</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
        <App />
        <Route exact path="/" component={Home}/>
        <Route path="/Add" component={Add}/>
        </div>
      </div>
  </Router>

    , document.getElementById('root'));

registerServiceWorker();
