import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './Components/Header'
import About from './pages/About'
import Details from './pages/Details'
import Home from './pages/Home'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='movie/:category' element={<Main />} />
        <Route path='movie/search' element={<Search />} />
        <Route path='movie/detail' element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
