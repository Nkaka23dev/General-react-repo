import Home from "./Home";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blog/:id">
            <BlogDetails/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
