import React, { Component } from 'react';

import SwapiService from '../../api/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();


  render() {

    // const { planet: { id, name, population,
    //   rotationPeriod, diameter } } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src="https://swapi.dev/api/planets/1/" />
        <div>
          <h4>Stae</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>2</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>1</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>123</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}