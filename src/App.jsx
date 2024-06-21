import { BrowserRouter, Routes, Route} from "react-router-dom";


import HomePage from "./Pages/HomePage/home.jsx"


function App(){
    return(
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App