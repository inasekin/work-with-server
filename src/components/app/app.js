import React, { Component } from 'react';

import Header from '../header';
import PeoplePage from '../pages/people-page'
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import SwapiService from '../../service/swapi-service';
import DummySwapiService from '../../service/dummy-swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';
import {PlanetsPage, StarshipsPage} from "../pages";

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            };
        });
    };

    render() {

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService} >
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange} />
                        <RandomPlanet/>
                        <PeoplePage />
                        <StarshipsPage />
                        <PlanetsPage />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}