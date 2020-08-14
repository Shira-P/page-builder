import React, { Component } from 'react';
import './css/sandbox.css'

import Books from './Books'
import KeyPages from './KeyPages'
import Pages from './Pages'

class Sandbox extends Component {
  render() {
    let keypage = this.props.books[0].keypages;


    console.log(keypage);
    return ( 
      <section className="sandbox">
        <Books />
        <KeyPages />
        <Pages />
      </section>
    );
  }
}

export default Sandbox;
