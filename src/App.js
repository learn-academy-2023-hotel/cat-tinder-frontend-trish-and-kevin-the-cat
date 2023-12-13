import { useState } from "react"
import { Route, Routes } from "react-router-dom"

import Footer from "./components/Footer"
import Header from "./components/Header"
import mockCats from "./mockCats"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

import "./App.css"

const App = () => {
  const [cats, setCats] = useState(mockCats)

  const createCat = (createdCat) => {
    console.log("created cat:", createdCat)
  }
  const updateCat = (cat, id) => {
    console.log("update: ", cat)
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/catedit/:id"
          element={<CatEdit cats={cats} updateCat={updateCat} />}
        />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
