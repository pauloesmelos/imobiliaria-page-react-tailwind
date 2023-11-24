import React from 'react';
import Header from './header/Header';
import Houses from './houses/Houses';
import Sidebar from './sidebar/Sidebar';

const App = () => {

  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="w-full">
          <Header />
          <Houses />
        </div>
      </div>
    </>
  )
}

export default App;