import React, {Component} from 'react';

import './people-page.css';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../api/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3,
        hasError: false
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson});
    };

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator/>;
        }

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}>
                {(item) => (`${item.name} (${item.eye_color}, ${item.height})`)}
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundry>
                <PersonDetails personId={this.state.selectedPerson} />
            </ErrorBoundry>
        );

        return (
            <div>
                <Row left={itemList} right={personDetails} />
                {/* <Row left="left" right="right" /> */}
            </div>

        );
    }
}