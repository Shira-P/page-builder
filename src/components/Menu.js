import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faInfoCircle,  faPlus, faShareSquare, faBookReader } from '@fortawesome/free-solid-svg-icons'

import './css/menu.css'

class Menu extends Component {
  render() {
    return ( 
      <header>
          <div className="column-nav-list">
              <nav>
                  <a className="header-action" title="Public a new book.">
                    <FontAwesomeIcon icon={faPlus} size="2x" color="#faf9f7"/>
                  </a>
                  <a className="header-action" title="Read from books code.">
                    <FontAwesomeIcon icon={faBookReader} size="2x" color="#faf9f7"/>
                  </a>
                  <a className="header-action" title="Share">
                    <FontAwesomeIcon icon={faShareSquare} size="2x" color="#faf9f7"/>
                  </a>
              </nav>
          </div>

          <div className="column-nav-list">
              <nav>
                  <a className="header-action">
                    <FontAwesomeIcon icon={faAngleDoubleRight} size="2x" color="#f5d1ca"/>
                  </a>
                
                  <a className="header-action">
                    <FontAwesomeIcon icon={faInfoCircle} size="2x" color="#f5d1ca"/>
                  </a>
              </nav>
          </div>

        {/* <div><i className="fa fa-angle-double-right">Expand</i></div>
        <div><i className="fa fa-angle-d0ouble-left">Collapse</i></div> */}
      </header>
    );
  }
}

export default Menu;