import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

const App = () => {

  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <BrowserRouter basename='/youtube-clone'>
        <Navbar setSidebar={setSidebar} />
        <Routes>
          <Route exact path='/youtube-clone' element={<Home sidebar={sidebar} />}></Route>
          <Route path='/video/:categoryId/:videoId' element={<Video />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
