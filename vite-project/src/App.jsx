import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Journal from './components/Journal.jsx';
import data from "./data.js"

function App() {
  const journalElements = data.map((entry => {
    return(
      <Journal
        key={entry.id}
        {...entry}
      />
  )
}))
  return (
    <div>
      <Navbar />
      <main>
        {journalElements}
      </main>
    </div>
  )
}

export default App
