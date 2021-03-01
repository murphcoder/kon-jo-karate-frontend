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
            
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

};

export default App;