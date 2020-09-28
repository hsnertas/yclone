import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
function App() {
  return (
    // BEM class naming

    <div className="qpp">
      <Router>
      <Header />
        <Switch>
          <Route path="/search/:searchTerm">
          <div className="app__page">
          <Sidebar />
          <SearchPage />
          </div>
          </Route>
          <Route path="/">
            {/* Header Component-1 */}
           
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
