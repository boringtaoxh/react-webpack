import React from 'react';
import Item from './item.js';

import mui from 'material-ui';

var {Card, List} = mui;

export default class Items extends React.Component {
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
      <Card>
        <List>
          {items}
        </List>
      </Card>
    );
  };
}