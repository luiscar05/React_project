import { Route,Routes } from "react-router-dom"
import { Menu } from "./components/Menu"
import {Home} from "./page/Home"
import { Registrar } from "./page/RegistroVariedad";
import {ActualizarVariedad} from "./page/ActualizarVariedad"
import {Contactenos}from "./page/Contactenos"
import { Nosotros } from "./page/Nosotros";
import './index.css';



function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Menu></Menu>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Register" element={<Registrar/>}></Route>
            <Route path="/actualizarVariedad/:id" element={<ActualizarVariedad/>}/>
            <Route path="/contactenos" element={<Contactenos/>}/>
            <Route path="/nosotros" element={<Nosotros/>}></Route>
         </Route>
        
      </Routes>
    </>
  )
}

export default App
