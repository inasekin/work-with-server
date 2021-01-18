import React, {Component} from 'react';

import './people-page.css';
import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../api/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedItem: 3,
        hasError: false
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    };

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator/>;
        }

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
            getData={this.swapiService.getAllPeople}>
                {(item) => (`${item.name} (${item.eye_color}, ${item.height})`)}
            </ItemList>
        );

        const itemDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={this.state.selectedItem} />
            </ErrorBoundry>
        );

        return (
            <div>
                <Row left={itemList} right={itemDetails} />
                {/* <Row left="left" right="right" /> */}
            </div>

        );
    }
}