import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";

import SignUp from "./components/Sign/SignUp";
import SignIn from "./components/Sign/SignIn";
import Home from "./pages/Home";
import User from "./pages/User";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Explore from "./pages/Explore";
import TweetDetails from "./pages/TweetDetails";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/profile"} component={Profile} />
        <Route path={"/register"} component={SignUp} />
        <Route path={"/login"} component={SignIn} />
        <Route path={"/user/:id"} component={User} />
        <Route path={"/notifications"} component={Notifications} />
        <Route path={"/explore"} component={Explore} />
        <Route path={"/tweets/:id"} component={TweetDetails} />
        <Route path={"/"} component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
