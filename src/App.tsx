import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ForgotPassword from "./screens/ForgotPassword";
import SignIn from "./screens/Login";
import SignUp from "./screens/SignUp";
import Termos from "./screens/Termos";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cadastro">
          <SignUp />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/termos">
          <Termos />
        </Route>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}
