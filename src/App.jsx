import { Route,Routes } from "react-router-dom"
import { Menu } from "./components/Menu"
import {Home} from "./page/Home"
import './index.css';



function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Menu></Menu>}>
            <Route path="/" element={<Home></Home>}></Route>
         </Route>
        
      </Routes>
    </>
  )
}

export default App
