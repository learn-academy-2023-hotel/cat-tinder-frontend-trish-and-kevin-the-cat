import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"

import Footer from "./components/Footer"
import Header from "./components/Header"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

import "./App.css"

const App = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    readCats()
  }, [])

  const url = `https://cat-tinder-backend.onrender.com`
  const readCats = () => {
    fetch(`${url}/cats`) // this is the request
      .then((response) => response.json()) // converts JSON to data we can use in JavaScript
      .then((payload) => {
        setCats(payload)
      })
      .catch((error) => console.log("Cat read errors: ", error))
  }

  const createCat = (createdCat) => {
    fetch(`${url}/cats`, {
      // body will have new cat data
      body: JSON.stringify(createdCat),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readCats())
      .catch((error) => console.log("Cat create errors:", error))
  }

  const updateCat = (selectedCat, id) => {
    fetch(`${url}cats/${id}`, {
      body: JSON.stringify(selectedCat),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => readCats())
      .catch((error) => console.log("Update cat errors: ", error))
  }

  const deleteCat = (id) => {}

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
        <Route
          path="/catshow/:id"
          element={<CatShow cats={cats} deleteCat={deleteCat} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
