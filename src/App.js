import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Auth , Home} from './screens'
import { Pages } from './screens'

function App() {
  return (
   <BrowserRouter>
    <Routes>
        <Route path={Pages.login} element={<Auth />} />
        <Route path={Pages.home} element={<Home />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App