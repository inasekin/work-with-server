import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <div className="container">
        <h3 className="header__title">
          <a href="#">
            StarDB
          </a>
        </h3>
        <ul className="header__navigation">
          <li>
            <a href="#" className="text-white">People</a>
          </li>
          <li>
            <a href="#" className="text-white">Planets</a>
          </li>
          <li>
            <a href="#" className="text-white">Starships</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;