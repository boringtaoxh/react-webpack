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
    this.firebaseRef = new Firebase('https://alovelything.firebaseio.com/brands');
    this.firebaseRef.once("value", (dataSnapshot)=> {
      var items = dataSnapshot.val();
      this.setState({
        items: items
      });
    });
  };
  render() {
    var items = _.map(this.state.items, function (item, index) {
          var avatar = "http://data.a-lovely-thing.com/assets/brands/" + item.imageThumb;
          console.log(avatar);
          return (
              <Item key={item.name} name={item.name} avatar={avatar}/>
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