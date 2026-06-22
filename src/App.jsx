import React, { useEffect } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import HavasFooter from './components/Footer'
import Map from './components/map'
import { Route, Routes, useNavigate } from 'react-router-dom'
import About from './pages/About'
import Markets from './pages/Markets'
import News from './pages/News'
import { useStore } from './Store/zustand'
import SignUp from './pages/sign'
import { ToastContainer } from 'react-toastify'
import Hamkorlar from './pages/Hamkorlar'
import Vakansiya from './pages/Vakansiya'
import Retseptlar from './pages/Retseptlar'
import QidiruvNatijalari from './pages/search'
import './i18n/index.js'

export default function App() {
  const isLogin = useStore((state) => state.isLogin)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogin) {
      navigate('/signup')
    }
  }, [isLogin, navigate])

  function handleProtector(element) {
    return isLogin ? element : null
  }

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/*"
          element={
            <div className="bg-white dark:bg-black">
              {isLogin ? <Header /> : null}
              <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={handleProtector(<Home />)} />
                <Route path="/about" element={handleProtector(<About />)} />
                <Route path="/markets" element={handleProtector(<Markets />)} />
                <Route path="/news" element={handleProtector(<News />)} />
                <Route path="/partners" element={handleProtector(<Hamkorlar />)} />
                <Route path="/vacancy" element={handleProtector(<Vakansiya />)} />
                <Route path="/offers" element={handleProtector(<Retseptlar />)} />
                <Route path="/search" element={<QidiruvNatijalari />} />
              </Routes>
              {isLogin ? <Map /> : null}
              {isLogin ? <HavasFooter /> : null}
            </div>
          }
        />
      </Routes>
    </>
  )
}