import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";

function App() {
  return (
    // BEM class naming
    
    <div className="qpp">
       {/* Header Component-1 */}
      <Header/>
   
    <div className="app__page">
    {/* Sidebar Component-2 */}
    <Sidebar/>
    {/* RecommendedVideo Component-3 */}
    <RecommendedVideos/>
    </div>
    
    </div>
  );
}

export default App;
