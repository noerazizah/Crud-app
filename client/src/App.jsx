import React from "react";
<<<<<<< HEAD
// import Header from "./components/header/Header";
// import NavBar from "./components/navbar/NavBar";
//import Post from "./components/post/Post";
import Write from "./pages/write/Write";
=======
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Sidebar from "./components/sidebar/Sidebar";
import Post from "./components/posts/Posts";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Setting from "./pages/setting/PageSettings"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
>>>>>>> upstream/main


function App() {
  const user = true;
  return (
<<<<<<< HEAD
    // <><NavBar /><Header /></>
    //<Post/>
    <Write/>
=======
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
>>>>>>> upstream/main
  );
}

export default App;