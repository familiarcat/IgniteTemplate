import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// dumb components
// import Header     from 'Header';
// import HelloWorld from 'HelloWorld';
// actions
// import {
//   toggleColor,
// } from '../../actions/actions';

/** The app entry point */
class RootContainer extends Component {
  render() {
    // injected by connect call
    const { dispatch, color, data } = this.props;

    return (
      <div className="react-native-web">
        <span>Hello React</span>
      </div>
    );
  }
}

RootContainer.propTypes = {
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(RootContainer);
