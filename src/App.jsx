import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'


import RootLayout
from './Layouts/RootLayouts'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Certificates from './Pages/Certificates'

import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path='Projects' element={<Projects />} />
      <Route path='Skills' element={<Skills />} />
      <Route path='Certificates' element={<Certificates />} />
    </Route>
  )

)
function App() {



  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
