import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import { Linkdin } from "./components/linkedin/linkedin";

const App = () => {
  return (
      <Router>
        <Linkdin />
      </Router>
  )
}

export default App;
