import "./App.css"
import mockCats from "./mockCats"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="/catindex" element={<CatIndex />} />
        <Route path="/catnew" element={<CatNew />} />
        <Route path="/catshow" element={<CatShow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
