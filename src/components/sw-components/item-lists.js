import React from 'react';
import ItemList from '../item-list/item-list';
import SwapiService from '../../services/swapi-service';
import {withData} from '../hoc-helpers';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarschips,
    getAllPlanets
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    }
};
renderName = ({name}) => <span>{name}</span>;
const renderModelAndName ({model, name}) => <span>{name} ({model})</span>

const PersonList = withData(withChildFunction(
    ItemList,renderName), getAllPeople);
const PlanetList = withData(withChildFunction(
    ItemList,renderName), getAllPlanets);
const StarshipList = withData(withChildFunction(
    ItemList,renderModelAndName), getAllStarschips);

export {
    PersonList,
    PlanetList,
    StarshipList
}