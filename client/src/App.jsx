import React from "react";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Sidebar from "./components/sidebar/Sidebar";
import Post from "./components/post/Post";
import Register from "./pages/register/Register";
import Setting from "./pages/setting/PageSettings";

function App() {
  return (
    <>
      {/* <NavBar />
      <Home />
      <Login/> */}
      <Setting/>
    </>
  );
}

export default App;