import { Route,Routes } from "react-router-dom"
import { Menu } from "./page/Menu"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu></Menu>}> 

        </Route>
      </Routes>
    </>
  )
}

export default App
