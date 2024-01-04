import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"

import Footer from "./components/Footer"
import Header from "./components/Header"
import mockCats from "./mockCats"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import MyCatIndex from "./pages/MyCatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import mockUsers from "./mockUsers"
import Signup from "./pages/Signup"

import "./App.css"

const App = () => {
  const [cats, setCats] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  // for protected page we will need currentUser.id === cat.user_id
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
    readCats()
  }, [])
  //  CRUD fxnality fetch calls

  // const url = `https://cat-tinder-backend.onrender.com`
  const url = "http://localhost:3000/"
  const readCats = () => {
    fetch(`${url}cats`) // this is the request
      .then((response) => response.json()) // converts JSON to data we can use in JavaScript
      .then((payload) => {
        setCats(payload)
      })
      .catch((error) => console.log("Cat read errors: ", error))
  }

  const createCat = (createdCat) => {
    fetch(`${url}cats`, {
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

  const deleteCat = (id) => {
    fetch(`${url}cats/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => readCats())
      .catch((errors) => console.log("delete errors:", errors))
  }

  // authentication/auth fetch calls
  // localSTorage - saves k-v pairs in browser.  Must be strings - use JSON.stringify(yourDataHere)

  const signup = (userInfo) => {
    fetch(`${url}signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        // store token in browser using localStorage
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .catch((error) => console.log("signup errors: ", error))
  }

  const logout = () => {
    fetch(`${url}logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"), //retrieve token
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setCurrentUser(null)
      })
      .catch((error) => console.log("log out errors: ", error))
  }

  return (
    <>
      <Header currentUser={currentUser} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup signup={signup} />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route
          path="/catshow/:id"
          element={<CatShow cats={cats} deleteCat={deleteCat} />}
        />

        {
          <>
            currentUser && (
            <Route
              path="/mycats"
              element={<MyCatIndex cats={cats} currentUser={currentUser} />}
            />
            <Route
              path="/catedit/:id"
              element={<CatEdit cats={cats} updateCat={updateCat} />}
            />
            <Route path="/catnew" element={<CatNew createCat={createCat} />} />)
          </>
        }
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
