import React, { Component } from "react";

import HeaderContainer from "./containers/HeaderContainer";
import Card_ThayBoi from "./components/Card_ThayBoi";
import { Provider } from "react-redux";
import configStore from "./redux/configStore";
const store = configStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HeaderContainer />
        <Card_ThayBoi />
      </Provider>
    );
  }
}

export default App;
