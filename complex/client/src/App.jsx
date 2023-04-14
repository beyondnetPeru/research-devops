import "./App.css";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fib Calculator
          </a>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <Routes>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
