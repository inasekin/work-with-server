import React, {Component} from 'react';

import './people-page.css';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../api/swapi-service';

const Row = ({left, right}) => {
    return (
        <div className="row mb2 margin-bottom">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    );
};

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch(error, info) {
        debugger;

        this.setState({
            hasError: true
        });
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
            getData={this.swapiService.getAllPeople} 
            renderItem={(item) => `${item.name} (${item.eye_color}, ${item.height})`}/>
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        );

        return (
            <Row left={itemList} right={personDetails} />
        );
    }
}