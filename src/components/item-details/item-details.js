import React, { Component } from 'react';
import SwapiService from '../../api/swapi-service';
import Loader from '../loader';

import './item-details.css';

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const {itemId} = this.props;
    if(!itemId) {
      return <Loader/>;
    }

    this.swapiService
      .getItem(itemId)
      .then((item) => {
        this.setState({item});
      });
  }

  render() {
    const {item} = this.state;

    if (!this.state.item) {
      return <span>Select a Item from a list</span>;
      // Loader
    }

    const { id, height, name, gender, eye_color } = item;

    return (
      <div className="item-details card">
        <img className="item-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye color</span>
              <span>{eye_color}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Height</span>
              <span>{height}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}