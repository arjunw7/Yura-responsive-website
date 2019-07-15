import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Containers/HomePage';
import Cases from './Containers/CasesPage';
import Contact from './Containers/ContactPage';
import NotFound from "./Containers/404Page";
import Team from './Containers/TeamPage';
import Navigation from "./Components/Navbar";
import ServicesMethods from './Containers/ServicesMethodsPage';
import CaseDetails1 from './Containers/CaseDetailsPage1';
import CaseDetails2 from './Containers/CaseDetailsPage2';
import CaseDetails3 from './Containers/CaseDetailsPage3';
import CaseDetails4 from './Containers/CaseDetailsPage4';
import Blockchain from './Containers/BlockchainPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/services&Methods" component={ServicesMethods} />
            <Route exact path="/cases" component={Cases} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/1" component={CaseDetails1} />
            <Route exact path="/2" component={CaseDetails2} />
            <Route exact path="/3" component={CaseDetails3} />
            <Route exact path="/4" component={CaseDetails4} />
            <Route exact path="/workshop" component={Blockchain} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
