import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-social/bootstrap-social.css";
import App from './App';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

//after running create react app you see that it sets up your service worker for you . so all you need to do to activate it is to change 
// it to register instead of unregister and that is all
//but if you want to understand how to create a PWA check out a course on google site for it. They taught it well 
serviceWorker.register();

