import './App.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './Pages/Navbar.jsx'
import {BrowserRouter, Route, Routes,} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import AddStudent from './Pages/AddStudent.jsx'
import ShowStudent from './Pages/ShowStudent.jsx'
import SingleStudent from './Pages/SingleStudent.jsx'
import EditStudent from './Pages/EditStudent.jsx'
function App() {

  return (
    <>
     <BrowserRouter>
         <Navbar/>

         <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<AddStudent/>}/>
          <Route path='/show' element={<ShowStudent/>}/>
          <Route path='/single/:id' element={<SingleStudent/>}/>
          <Route path='/edit/:id' element={<EditStudent/>}/>

         </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
