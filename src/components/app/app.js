import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list/';
import ItemDetails from '../item-details/item-details';

import './app.css';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';
import SwapiService from '../../api/swapi-service';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  componentDidCatch() {
    console.log('componentDidCatch');
    this.setState({hasError: true});
  }

  render() {

    if(this.state.hasError) {
      return <ErrorIndicator/>;
    }

    return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="container">
        <PeoplePage/>
      </div>
    </div>
    );

  }
};
