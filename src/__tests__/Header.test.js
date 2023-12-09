// imports
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from "../components/Header"

describe("<Header />", () => {
  it('does not crash when rendering', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    // debugging
    // screen.debug() // gives the html output of the current DOM
    // screen.logTestingPlaygroundURL() // provides an url in the test suite that can be copied and pasted in the browser, displays the html output and applicable queries
    const homeElement = screen.getByText(/home/i)
    expect(homeElement).toBeInTheDocument()
  })

  it('renders a index link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    // debugging
    // screen.logTestingPlaygroundURL() 
    const indexElement = screen.getByText(/see the cats/i)
    expect(indexElement).toBeInTheDocument()
  })

  it('renders three navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    // debugging
    // screen.logTestingPlaygroundURL() 
    const homeLink = screen.getAllByRole('link')
    // screen.debug(homeLink)
    expect(homeLink.length).toEqual(3)
  })

  it('renders a home link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    // debugging
    // screen.logTestingPlaygroundURL() 
    const homeLink = screen.getByRole('link', { 
      name: /home/i
    })
    expect(homeLink).toBeInTheDocument()
  })

})
