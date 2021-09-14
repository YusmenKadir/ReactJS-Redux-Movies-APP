import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route name="Search" exact path="/" component={Search} />
          <Route name="Favorites" path="/favorites" exact component={Favorites} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
