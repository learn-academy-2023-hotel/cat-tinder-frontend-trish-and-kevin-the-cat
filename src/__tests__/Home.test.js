import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';

describe("<Home />", () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  })
  it('renders an image', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const homeImage = screen.getByRole('img', {
      name: /black cat/i
    })
    expect(homeImage).toBeInTheDocument()
    expect(homeImage).toHaveAttribute("alt", "black cat wrapped in red, blue, and gold colored christmas lights with a banner stating Kevin's Annual Jingle Mingle")
    expect(homeImage).toHaveAttribute("src", "home-image.png")
  });
})
