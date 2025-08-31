import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Welcome from "./Components/Welcome"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/welcome" element={<Welcome/>}></Route>
        </Routes>
      
      </BrowserRouter>
  )
}

export default App
