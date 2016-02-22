import React from 'react';
import mui from 'material-ui';

var {Card} = mui;

export default class Items extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <Card style={{
                margin: '30px auto',
                padding: 30
            }}>
                <textarea style={{
                    width: '100%',
                    borderColor: '#d0d0d0',
                    resize: 'none',
                    borderRadius: 3,
                    minHeight: 50,
                    color: '#555',
                    fontSize: 14,
                    outline: 'auto 0px'
                }} />
            </Card>
        );
    };
}