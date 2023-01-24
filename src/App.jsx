import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Card from "./pages/Card"
import Info from "./pages/Info"
import Navbar from "./components/Navbar"
import NotFound from "./pages/NotFound"
import SearchForm from "./components/SearchForm"
import Search from "./pages/Search"

function App() {

  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <SearchForm />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cards/:id/info" element={<Info />} />
            <Route path="/cards/:id" element={<Card />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
