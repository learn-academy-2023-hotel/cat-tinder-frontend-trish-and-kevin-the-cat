import React from "react"
import homeImage from "../assets/home-image.png"
const Home = () => {
  return(
    <main className="center">
      <img 
        id="home-image"
        src={homeImage} 
        alt="black cat wrapped in red, blue, and gold colored christmas lights with a banner stating Kevin's Annual Jingle Mingle"
        width="500"
      />
    </main>
  )
}

export default Home
