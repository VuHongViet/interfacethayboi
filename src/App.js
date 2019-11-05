import React, { Component } from "react";

import HeaderContainer from "./containers/HeaderContainer";
import { Provider } from "react-redux";
import configStore from "./redux/configStore";
const store = configStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HeaderContainer />
      </Provider>
    );
  }
}

export default App;
