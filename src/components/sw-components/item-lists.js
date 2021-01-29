import React from 'react';
import { withData } from '../hoc-helpers';
import ItemList from '../item-list';
import SwapiService from '../../service/swapi-service';

const swapiService = new SwapiService();

const {getAllPeople, getAllStarships, getAllPlanets} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped { ...props }>
                {fn}
            </Wrapped>
        )
    };
};

// const ListWithChildren = withChildFunction(
//     ItemList,
//     ({ name }) => <span>{name}</span>
// );

const renderName = ({ name }) => <span>{name}</span>;

const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople);
const PlanetList = withData(withChildFunction(ItemList, renderName), getAllPlanets);
const StarshipList = withData(withChildFunction(ItemList, renderName), getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};