import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>

      {/* App Body */}
     <div className="app__body">
       {/* Left Sidebar(Widgets) */}
       <Sidebar/>
     </div>
        
        {/* Main Content/Feed */}
        {/* Right Sidebar(Widgets) */}
        {/* Footer */}
    </div>
  );
}

export default App;
