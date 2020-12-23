import Navigation from "./components/nav.js"
import Gallery from "./components/gallery.js"
import About from "./components/about.js"
import React, {useState, useEffect} from "react";
import {Spring} from 'react-spring/renderprops'
import "./App.css"

function App() {
  const[bool,setBool] = useState(false)
  console.log("reload")
  return (
    <div className="app">
      <button onClick={() => console.log("test")}>click me</button>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        reset={true}

      >
        {props => <div style={props}>hello</div>}
      </Spring>
      <Navigation/>
      <Gallery/>
      <About/>
    </div>
  );
}

export default App;
