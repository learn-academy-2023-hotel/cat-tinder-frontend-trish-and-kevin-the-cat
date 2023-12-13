import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"

import mockCats from "../mockCats"
import CatEdit from "../pages/CatEdit"

const renderEdit = () => {
  render(
    <MemoryRouter initialEntries={["/catedit/1"]}>
      <Routes>
        <Route path="/catedit/:id" element={<CatEdit cats={mockCats} />} />
      </Routes>
    </MemoryRouter>
  )
}

describe("<CatEdit />", () => {
  it("display a form to update cat info", () => {
    renderEdit()
    const nameInput = screen.getByRole("textbox", {
      name: /name/i,
    })
    expect(nameInput).toBeInTheDocument()

    const enjoysInput = screen.getByRole("textbox", {
      name: /enjoys/i,
    })
    expect(enjoysInput).toBeInTheDocument()
  })
})
