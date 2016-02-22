import React from 'react';
import Firebase from 'firebase';
import _ from 'lodash';

import Item from './item.js';

import mui from 'material-ui';

var {Card, List} = mui;

export default class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
      ]
    };
    this.firebaseRef = new Firebase('https://ntinue.firebaseio.com/ideas');
    this.firebaseRef.on("value", (dataSnapshot)=> {
      var items = dataSnapshot.val();
      this.setState({
        items: items
      });
    });
  };
  render() {
    var items = _.map(this.state.items, function (item, index) {
          return (
              <Item key={item.keywords} name={item.keywords} />
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