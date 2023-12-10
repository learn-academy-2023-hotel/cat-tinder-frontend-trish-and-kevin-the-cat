import { render, screen } from "@t"
import CatIndex from "../pages/CatIndex"
import mockCats from "../mockCats"

describe("<CatIndex />", () => {
  it("renders without crashing", () => {})

  it("renders cat cards", () => {
    const div = document.createElement("div")
    render(<CatIndex cats={mockCats} />, div)
    mockCats.forEach((cat) => {
      const catName = screen.getByText(cat.name)
      expect(catName).toBeInTheDocument()
    })
  })
})
