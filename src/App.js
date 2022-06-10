import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
