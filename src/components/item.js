import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <ListItem leftAvatar={<Avatar>A</Avatar>}>{this.props.item}</ListItem>
    );
  };
}