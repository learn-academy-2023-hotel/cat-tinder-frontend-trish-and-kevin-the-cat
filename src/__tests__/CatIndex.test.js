import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import mockCats from "../mockCats"
import CatIndex from "../pages/CatIndex"

describe("<CatIndex />", () => {
  it("renders without crashing", () => {})
  render(
    <BrowserRouter>
      <CatIndex cats={mockCats} />
    </BrowserRouter>
  )

  it("renders cat cards", () => {
    render(
      <BrowserRouter>
        <CatIndex cats={mockCats} />
      </BrowserRouter>
    )
    mockCats.forEach((cat) => {
      const catName = screen.getByText(cat.name)
      expect(catName).toBeInTheDocument()
    })
  })
})
