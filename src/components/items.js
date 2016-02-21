import React from 'react';
import Item from './item.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'item1',
        'item2'
      ]
    }
  };
  render() {
    var items = this.state.items.map((item) => {
        return (
          <Item key={item} item={item} />
        )
      }
    );
    return (
      <ul>
        {items}
      </ul>
    );
  };
}