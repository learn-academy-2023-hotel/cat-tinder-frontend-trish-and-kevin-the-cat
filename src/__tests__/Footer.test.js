import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import Footer from "../components/Footer"

describe("<Footer />", () => {
  it("renders a Footer heading", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footer = screen.getByText(/trish/i)
    expect(footer).toBeInTheDocument()
  })
})
