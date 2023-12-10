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

  console.log(cats)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catnew" element={<CatNew />} />
        <Route path="/catshow" element={<CatShow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
