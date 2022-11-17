import React from "react";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Sidebar from "./components/sidebar/Sidebar";
import Post from "./components/post/Post";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;