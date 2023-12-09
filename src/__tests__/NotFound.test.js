import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NotFound from '../pages/NotFound';

describe("<NotFound />", () => {
  it('renders learn react link', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const notFoundElement = screen.getByText(/not/i)
    expect(notFoundElement).toBeInTheDocument()
  });
})
