import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
         <BrowserRouter>
         <NavBar />
          <Switch>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

};

export default App;