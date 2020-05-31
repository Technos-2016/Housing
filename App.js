import React, { Component } from 'react';
import Splash from './src/screens/Splash';
import {Provider} from 'react-redux';
import store from './src/store';
import {NavigationContainer} from "@react-navigation/native";
import NavigationScreen from "./src/screens/NavigationScreen";
import {FETCH_CURRENT_USER_START} from "./src/actions/types";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
  }
  componentDidMount() {
    store.dispatch({type: FETCH_CURRENT_USER_START});
    setTimeout(() => {
      this.setTimePassed();
    }, 2000);
  }
  setTimePassed() {
    this.setState({timePassed: true});
  }
  render() {
    if (!this.state.timePassed) {
      return <Splash />;
    }

    return (
      <Provider store={store}>
        <NavigationContainer>
          <NavigationScreen />
        </NavigationContainer>
      </Provider>
    )
  }
}
