import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"

const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  let currentCat = cats?.find((cat) => cat.id === +id)

  const [editCat, setEditCat] = useState({
    name: currentCat?.name,
    age: currentCat?.age,
    enjoys: currentCat?.enjoys,
    image: currentCat?.image,
    id: currentCat?.id,
  })
  const handleChange = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    updateCat(editCat, currentCat.id)
    navigate(`/catshow/${id}`)
  }
  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={editCat.name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="age">Age</Label>
        <Input
          id="age"
          name="age"
          type="text"
          onChange={handleChange}
          value={editCat.age}
        />
      </FormGroup>
      <FormGroup>
        <Label for="enjoys">Enjoys</Label>
        <Input
          id="enjoys"
          name="enjoys"
          type="text"
          onChange={handleChange}
          value={editCat.enjoys}
        />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image</Label>
        <Input
          id="image"
          name="image"
          type="text"
          onChange={handleChange}
          value={editCat.image}
        />
      </FormGroup>
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default CatEdit
