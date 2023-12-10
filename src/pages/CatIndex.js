import React from "react"
import { Button, Card, CardBody, CardTitle } from "reactstrap"

const CatIndex = ({ cats }) => {
  console.log("Cat index props: ", cats)
  return (
    <div className="index-cards">
      {cats.map((cat, index) => {
        return (
          <Card
            style={{
              width: "18rem",
            }}
            key={index}
          >
            <img alt="Sample" src={cat.image} />
            <CardBody>
              <CardTitle tag="h5">{cat.name}</CardTitle>
              <Button>Details</Button>
            </CardBody>
          </Card>
        )
      })}
    </div>
  )
}

export default CatIndex
