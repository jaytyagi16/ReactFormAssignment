import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'

const App: React.FC = () => {
  return (
    <div>

      <Routes>
        <Route
          path='/'
          element={<LoginPage/>}
        />

        <Route
          path='/home'
          element={<Home/>}
        />
      </Routes>

    </div>
  )
}

export default App