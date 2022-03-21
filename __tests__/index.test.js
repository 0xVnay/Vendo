import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import { MockProviders } from '@/utils/test-utils.js'

describe('Home', () => {
  it('renders a home screen', () => {
    render(
      <MockProviders>
        <Home />
      </MockProviders>
    )

    const heading = screen.getByRole('heading', {
      name: /Assignment Task/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
