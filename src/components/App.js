import React from 'react';
import Items from './items.js';

import AppBar from 'material-ui/lib/app-bar';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import Colors from 'material-ui/lib/styles/colors';

require('./app.styl');

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: Colors.blue500,
  }
});

class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="Header"/>
          <Items />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
