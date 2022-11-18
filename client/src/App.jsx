import React from "react";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Sidebar from "./components/sidebar/Sidebar";
<<<<<<< HEAD
import Post from "./components/post/Post";
=======
import Post from "./components/posts/Posts";
>>>>>>> a659170c255cd6a16abf12700cc606fde771a1dc
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
<<<<<<< HEAD
import Setting from "./pages/setting/PageSettings";
=======
import Setting from "./pages/setting/PageSettings"
>>>>>>> a659170c255cd6a16abf12700cc606fde771a1dc
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
<<<<<<< HEAD
// import { useContext } from "react";
// import { Context } from "./context/Context";
=======
>>>>>>> a659170c255cd6a16abf12700cc606fde771a1dc


function App() {
  const user = true;
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Setting /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;