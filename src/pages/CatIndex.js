import React from "react"
import { NavLink } from "react-router-dom"
import CatCard from "../components/CatCard"

const CatIndex = ({ cats }) => {
  return (
    <div className="cards-index">
      {cats?.map((cat, index) => {
        return <CatCard cat={cat} index={index} />
      })}
    </div>
  )
}

export default CatIndex
