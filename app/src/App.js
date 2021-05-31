import React from 'react';
import Index from './pages/index';
import Note from './pages/noteId';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import NavigationProvider from './lib/NavigationProvider';
import Route from './lib/Route';

function App() {
  return (
    // <Router>
    <NavigationProvider>
      <div>
        <AppBar position="static">
          <Toolbar>
            <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
              <Typography variant="h6">Notes App</Typography>
            </a>
          </Toolbar>
        </AppBar>

        {/* <Switch> */}
        <Route path="/">
          <Index />
        </Route>

        <Route path="/:noteId">
          <Note />
        </Route>
        {/* </Switch> */}
      </div>
    </NavigationProvider>
    // </Router>
  );
}

export default App;
