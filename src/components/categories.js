import React from 'react';
import Category from './category.js';

import mui from 'material-ui';

var {Card, List} = mui;

export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                'category1',
                'category2'
            ]
        }
    };
    render() {
        var categories = this.state.items.map((category) => {
                return (
                    <Category key={category} category={category} />
                )
            }
        );
        return (
            <Card>
                <List>
                    {categories}
                </List>
            </Card>
        );
    };
}