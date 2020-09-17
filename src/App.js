import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    // BEM class naming

    <div className="qpp">
      <Router>
        <Switch>
          <Route path="/search">
          <Header />
          </Route>
          <Route path="/">
            {/* Header Component-1 */}
            <Header />
            <div className="app__page">
              {/* Sidebar Component-2 */}
              <Sidebar />
              {/* RecommendedVideo Component-3 */}
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
