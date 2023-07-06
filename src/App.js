import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import IndexComponent from "./components/IndexComponent";
import CreateComponent from "./components/CreateComponent";
import DeleteComponent from "./components/DeleteComponent";
import EditComponent from "./components/EditComponent";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/" component={IndexComponent} exact/>
            <Route path="/Todo/Index" component={IndexComponent} />
            <Route path="/Todo/Create" component={CreateComponent} />
            <Route path="/Todo/Delete/:id" component={DeleteComponent} />
            <Route path="/Todo/Edit/:id" component={EditComponent} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
