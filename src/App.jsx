import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Card from "./pages/Card"

import Navbar from "./components/Navbar"

function App() {

  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cards/:id" element={<Card />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
