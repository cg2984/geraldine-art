import logo from './logo.svg';
import Footer from "./components/footer.js"
import Gallery from "./components/gallery.js"
import React from "react";
import "./App.css"

function App() {
  return (
    <div className="app">
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
