import CatCard from "../components/CatCard"

const MyCatIndex = ({ cats, currentUser }) => {
  console.log("cats: ", cats)
  console.log("user: ", currentUser)

  const myCats = cats?.filter((cat) => currentUser.id === cat.user_id)
  console.log("mycats: ", myCats)
  return (
    <div className="cards-index">
      {myCats?.map((cat, index) => {
        return <CatCard cat={cat} index={index} />
      })}
    </div>
  )
}

export default MyCatIndex
