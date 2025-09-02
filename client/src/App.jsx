import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout' // ✅ correct
import Dashboard from './pages/Dashboard'
import Writearticle from './pages/Writearticle'
import Blocktitle from './pages/Blocktitle'
import Generateimage from './pages/Generateimage'
import Removebg from './pages/Removebg'
import Removeobject from './pages/Removeobject'
import Reviewresume from './pages/Reviewresume'
import Community from './pages/Community'
import { useAuth } from '@clerk/clerk-react'
import {Toaster} from 'react-hot-toast'

const App = () => {

  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ai' element={<Layout />} >  {/* ✅ now your page */}
        <Route  index element={<Dashboard/>} />
        <Route path='write-article' element={<Writearticle/>}/>
        <Route path='blog-titles' element={<Blocktitle/>}/>
        <Route path='generate-images' element={<Generateimage/>}/>
        <Route path='remove-background' element={<Removebg/>}/>
        <Route path='remove-object' element={<Removeobject/>}/>
        <Route path='review-resume' element={<Reviewresume/>}/>
        <Route path='community' element={<Community/>}/>
     

        </Route>
      </Routes>
    </div>
  )
}

export default App
