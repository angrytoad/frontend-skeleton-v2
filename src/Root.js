import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import App from './app/App';

class Root extends React.Component {

  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <div>
            <App />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }

}

export default Root;

