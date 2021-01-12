import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';

export default class App extends Component {

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
      <PeoplePage/>
      <PeoplePage/>
      </div>
    </div>
    );

  }
};
