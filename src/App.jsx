import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './page/Inicio'
import Laptop from './page/Laptop'
import Movil from './page/Movil'
import Tecno from './page/Tecno'
import Categorias from './page/Categorias'
import Contactos from './page/Contactos'
import Error404 from './page/Error404'
import SkinCare from './page/SkinCare'
import Tablets from './page/Tablets'
import Detalles from './page/Detalles'

const App = () => {
  return (
    <BrowserRouter>
    <div className='app'>
      <Header/>
        <Routes>
         <Route path='/' element={<Inicio/>}/>
         <Route path='/inicio' element={<Inicio/>}/>
         <Route path='/detalles/:id/:title' element={<Detalles/>}/>
         <Route path='/laptop' element={<Laptop/>}/>
         <Route path='/movil' element={<Movil/>}/>
         <Route path='/tecno' element={<Tecno/>}/>
         <Route path='/categorias/:cat/:name' element={<Categorias/>}/>
         <Route path='/contactos' element={<Contactos/>}/>
         <Route path='/skin-care' element={<SkinCare/>}/>
         <Route path='/tablets' element={<Tablets/>}/>
         <Route path='*' element={<Error404/>}/>
        </Routes>
      
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App