import React , {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry/error-boundry';
import { PeoplePage,
    PlanetsPage,
     StarshipsPage,
    LoginPage,
SecretPage
 } from '../pages';
import {SwapiServiseProvider} from '../svapi-service-context';
import DummySwapiService from '../../services/dummy-swapi-service';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import StarshipDetails from '../sw-components/starship-details';
export default class  App extends Component {


    state = {
        // showRandomPlanet: true,
        // hasError:false,
        swapiService: new SwapiService(),
        isLoggedId: false

    };


    onLogin= ()=> {
        this.setState({
            isLoggedIn: true
        })
    }
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

        const {isLoggedIn} = this.state;
    return (
  <ErrorBoundry>
      <SwapiServiseProvider value={this.state.swapiService}>
         
          <Router>

  <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange}/>
            <RandomPlanet/>
            <Switch>
            <Route path="/" 
            render={() => <h2>Welcome to StarDB</h2>}
            exact /> 
            <Route path="/people/:id?" component={PeoplePage}/>
            <Route path="/planets" component={PlanetsPage}/>
            <Route path="/starships" exact component={StarshipsPage}/>            
            <Route path="/starships/:id"
            render ={({match}) => {
                const {id} =match.params;
                return <StarshipDetails itemId={id} />
            }} />
            <Route 
            path="/login" 
            render={() => (
                <LoginPage 
                isLoggedIn={isLoggedIn}
                onLogin={this.onLogin}/> 
            )}/>
            <Route 
            path="/secret"
            render={()=>(
                <SecretPage isLoggedIn={isLoggedIn}/> 
            )} />
<Route render={() => <h2>Page not found</h2>} />
        </Switch>
         </div>  
         </Router> 
      </SwapiServiseProvider>
        </ErrorBoundry>  
    );
}
}