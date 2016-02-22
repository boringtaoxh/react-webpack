import React from 'react';
import mui from 'material-ui';
import Firebase from 'firebase';
import trim from 'trim';

var {Card} = mui;

export default class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idea: {}
        };
        this.firebaseRef = new Firebase('https://ntinue.firebaseio.com/ideas');
    };

    onChange(e) {
        this.setState({
            idea: {
                date: Firebase.ServerValue.TIMESTAMP,
                keywords: e.target.value,
                summary: e.target.value,
                user: "simplelogin:2"
            }
        });
    };

    onKeyUp(e) {
        if (e.keyCode === 13 && trim(e.target.value) !== '') {
            e.preventDefault();
            this.firebaseRef.push(
                this.state.idea
            );
            this.setState({
                idea: {
                    keywords: ''
                }
            });
            console.log('submit:', e.target.value);
        }
    }

    render() {
        return (
            <Card style={{
                margin: '30px auto',
                padding: 30
            }}>
                <textarea
                    value = {this.state.idea.keywords}
                    onChange = {this.onChange.bind(this)}
                    onKeyUp = {this.onKeyUp.bind(this)}
                    style={{
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