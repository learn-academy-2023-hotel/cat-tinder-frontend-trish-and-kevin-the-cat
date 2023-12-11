import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"

import mockCats from "../mockCats"
import CatShow from "../pages/CatShow"

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/catshow/1"]}>
      <Routes>
        <Route path="/catshow/:id" element={<CatShow cats={mockCats} />} />
      </Routes>
    </MemoryRouter>
  )
}

describe("<CatShow />", () => {
  it("renders without crashing", () => {
    renderShow()
  })

  it("renders a card with what cat enjoys", () => {
    renderShow()
    expect(
      screen.getByText(mockCats[0].enjoys, { exact: false })
    ).toBeInTheDocument()
  })
})

// `TestingLibraryElementError: Unable to find an element with the text: Talking to the dogs walking by. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.`
