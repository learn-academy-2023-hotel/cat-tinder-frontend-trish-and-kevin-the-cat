import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap"
import { NavLink } from "react-router-dom"

const CatCard = ({ cat, index }) => {
  return (
    <Card
      color="light"
      style={{
        width: "18rem",
      }}
      key={index}
    >
      <img alt="cat profile" src={cat.image} />
      <CardBody>
        <CardTitle tag="h4">{cat.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {cat.age}
        </CardSubtitle>

        <NavLink to={`/catshow/${cat.id}`} className="nav-link">
          Details
        </NavLink>
      </CardBody>
    </Card>
  )
}
export default CatCard
