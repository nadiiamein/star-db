
import React , {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page/people-page';
import ErrorButton from '../error-button/error-button';
import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list';
import Row from '../row';
import ItemDetails, {Record} from '../item-details/item-details';
import ErrorBoundry from '../error-boundry/error-boundry';
import { PersonDetails } from '../sw-components';
import { SwapiServiseProvider } from '../svapi-service-context';
export default class  App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError:false
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return{
                showRandomPlanet: !state.showRandomPlanet   
            };
        });
    };
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };
    componentDidCatch() {
        this.setState({hasError:true});
    }

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator />
        }

        const planet = this.state.showRandomPlanet ?
        <RandomPlanet /> : 
        null;

        const {getPerson,
             getStarship,
            getPersonImage,
        getStarshipImage } = this.swapiService;

    const personDetails = (
        <ItemDetails
         itemId={11}
         getData={getPerson}
         getImageUrl={getPersonImage} >

         <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/> 
       </ItemDetails>
    );
    const starshipDetails = (
        <ItemDetails
            itemId={3}
        getData={getStarship}
        getImageUrl={getStarshipImage}> 
        <Record field="model" label="Model"/>
        <Record field="length" label="Length"/> 
        <Record field="costInCredits" label="Cost"/> 

        </ItemDetails> 
    );

    return (
  <ErrorBoundry>
  <div className="stardb-app">
            <Header />
            {planet}

            <PersonDetails itemId={11} />
            <StarshipDetails itemId={9} />
            <PlanetDetails itemId={5} />


            <PersonList/>

<StarhipList/>

<PlanetList/>

            <Row
            left={personDetails}
            right={starshipDetails} />


     
      
<div className="row mb2 button-row">
            <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random planet
            </button>
           <ErrorButton />
           </div>

           <PeoplePage />


           <div className="row mb2">
        <div className="col-md-6">
            <ItemList 
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPlanets}
            renderItem={(item) => item.name}/>
        </div>
        <div className="col-md-6">
            <ItemDetails personId={this.state.selectedPerson} />
        </div>
    </div>

    <div className="row mb2">
        <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllStarships}
            renderItem={(item) => item.name}/>
        </div>
        <div className="col-md-6">
            <ItemDetails personId={this.state.selectedPerson}
             />
        </div>
    </div>
            
        </div>
        </ErrorBoundry>  
    );
};
};