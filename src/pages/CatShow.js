import React from "react"
import { NavLink, useParams } from "react-router-dom"

const CatShow = ({ cats }) => {
  const { id } = useParams()
  // find the cat whose id matches the id in params of url
  let selectedCat = cats?.find((cat) => cat.id === +id)

  return (
    <>
      {selectedCat && (
        <>
          <img alt={`${selectedCat.name}'s profile`} src={selectedCat.image} />
          <h3>{selectedCat.enjoys}</h3>
          <NavLink to={`/catedit/${selectedCat.id}`} className="nav-link">
            Edit Cat Profile
          </NavLink>
        </>
      )}
    </>
  )
}

export default CatShow
