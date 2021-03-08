import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
         <BrowserRouter>
         <NavBar />
          <Switch>
            <Route exact path='/' />
            <Route exact path='/classes' />
            <Route exact path='/locations' />
            <Route exact path='/instructors' />
            <Route exact path='/parents' />
            <Route exact path='/parents/:tripId' />
            <Route exact path='/instructors/:tripId' />
            <Route exact path='/login' />
            <Route exact path='/signup' />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

};

export default App;