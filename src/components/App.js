import React, { Component } from 'react';
import Items from './items.js';
require('./app.styl');

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <Items />
      </div>
    );
  }
}
