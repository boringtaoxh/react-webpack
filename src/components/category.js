import React from 'react';
import mui from 'material-ui';

var {ListItem} = mui;

export default class Category extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <ListItem>{this.props.category}</ListItem>
        );
    };
}