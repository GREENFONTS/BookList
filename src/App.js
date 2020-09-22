import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import "./index.css";
import Main from "./Components/Main";
import BookDetails from './Components/BookDetails';
import store from './Components/Store';

const App = () => {
 
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <h1 className="header text-center p-3" id="header-text">
            My BookList
          </h1>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path={`/:bookName`} exact component={BookDetails} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
