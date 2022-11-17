
import React from 'react'
import NavBar from './components/navbar/NavBar';
/*import NavBar from './components/navbar/NavBar';*/
import SinglePost from './components/single-post/Singlepost';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <header>
      <div className="App">
        <NavBar/>
        
      </div>
      <div className="App">
        <Settings/>
      </div>
    </header>
    
  );
}

export default App;