import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list/';
import PersonDetails from '../person-details/person-details'

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
      <div className="row mb2 margin-bottom">
          <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} 
                    getData={this.swapiService.getAllPlanets}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
      </div>
      <div className="row mb2 margin-bottom">
          <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} 
                    getData={this.swapiService.getAllStarships}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
      </div>
      </div>
    </div>
    );

  }
};
