import React ,{ useState } from 'react'
import {} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./global.css";
import Header from "./components/Home/Header/Header";
import Footer from "./components/Home/Footer/Footer";

const App = () => {
  return (
    <body className="HH__body">
      <Header />
      <Footer />
    </body>
  );
}

export default App
