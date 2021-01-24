import Navigation from "./components/nav.js"
import Gallery from "./components/gallery.js"
import About from "./components/about.js"
import Data from "./data/Painting_Data.json"
import Home from "./home.js"
import "./App.css"

function App() {
  console.log("app.js", Data);
  return (
    <div className="app">
      <Navigation/>
      <Home Data={Data}/>
      <About/>
    </div>
  );
}

export default App;
