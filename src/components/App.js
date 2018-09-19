import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { getChars } from '../actions';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.getChars();
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
            <ul>
              {this.props.chars.map(char => {
                return <li key={char.name}>{char.name}</li>;
              })}
            </ul>
          )}
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
const mapStateToProps = state => {
  console.log('state', state)
  return {
    chars: state.charsReducer.chars,
  }
}
// the chars and the fetching boolean
export default connect(mapStateToProps, { getChars })(App);
