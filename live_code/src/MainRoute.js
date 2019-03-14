import React from "react";
import {Route, Switch} from "react-router-dom";

import App from "./App"
import Signin from "./signin/Signin";
// import AppBlog from "./AppBlog"
import AppRomance from "./AppRomance"
import AppAction from "./AppAction"
import AppFiction from "./AppFiction"
import AppComedy from "./AppComedy"

import Profil from "./profil/Profil"

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/signin" component={Signin}></Route>
      <Route exact path="/romance" component={AppRomance}></Route>
      <Route exact path="/action" component={AppAction}></Route>
      <Route exact path="/fiction" component={AppFiction}></Route>
      <Route exact path="/comedy" component={AppComedy}></Route>
      <Route exact path="/profil" component={Profil}></Route>

    </Switch>
  )
}

export default MainRoute;