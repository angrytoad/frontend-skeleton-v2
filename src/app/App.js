import React from 'react';
import {connect} from 'react-redux';

import '../styles/_CORE.scss';

import { getTest } from '../actions/test';

const mapStateToProps = ({ test }) =>
  ({
    test
  });

const mapDispatchToProps = dispatch =>
  ({
    getTest: () => dispatch(getTest())
  });

class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      clicked: false
    }
  }

  handleTest() {
    this.props.getTest();
    this.setState({
      clicked: !this.state.clicked
    })
  }
  
  render() {
    return (
      <div id="App">
        <div>
          <h1>{ this.props.test }</h1>
          {
            this.state.clicked
            ?
              false
            :
              <button onClick={() => this.handleTest()}>Click Me</button>
          }
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);