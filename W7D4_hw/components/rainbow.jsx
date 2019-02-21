import React from 'react';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Red from './red';
import Green from './green';
import Blue from './blue';
import Violet from './violet';

class Rainbow extends React.Component {
  render() {
    return (
      <div>
        <h1>Rainbow Router!</h1>
        {/* Your links should go here */}
        <Route exact path="/red" component={Red} />
        <Route exact path="/green" component={Green} />
        <Route exact path="/blue" component={Blue} />
        <Route exact path="/violet" component={Violet} />
        <div id="rainbow">
          {/* Your routes should go here */}
        </div>
      </div>
    );
  }
};

export default Rainbow;
