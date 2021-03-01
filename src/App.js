import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
         <BrowserRouter>
          <Switch>
            <Route exact path='/' />
            <Route exact path='/classes' />
            4 years of secondary school, 2 years of pre-University, 2 years of University
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

};

export default App;