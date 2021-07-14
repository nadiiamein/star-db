import React , {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry/error-boundry';
import { PeoplePage,PlanetsPage, StarshipsPage } from '../pages';
import {SwapiServiseProvider} from '../svapi-service-context';
import DummySwapiService from '../../services/dummy-swapi-service';
import {BrowserRouter as Router, Route} from 'react-router-dom';
export default class  App extends Component {


    state = {
        showRandomPlanet: true,
        hasError:false,
        swapiService: new SwapiService()

    };
    onServiceChange = () => {
this.setState(({swapiService}) => {
    const Service = swapiService instanceof SwapiService ?
    DummySwapiService : SwapiService
    return {
        swapiService: new Service(),
    };
});
};    
   
    render() {

    return (
  <ErrorBoundry>
      <SwapiServiseProvider value={this.state.swapiService}>
          <Router>
  <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange}/>
            <RandomPlanet/>
            <Route path="/" 
            render={() => <h2>Welcome to StarDB</h2>}
            exact /> 
            <Route path="/people" component={PeoplePage}/>
            <Route path="/people" component={PlanetsPage}/>
            <Route path="/people" component={StarshipsPage}/>            
         </div>  
         </Router> 
      </SwapiServiseProvider>
        </ErrorBoundry>  
    );
}
}