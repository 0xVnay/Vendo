const { render } = require('@testing-library/react')
import Card from '@/components/Card'

describe('Card', () => {
  let expectedProps

  beforeEach(() => {
    expectedProps = {
      imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      heading: 'Rick Sanchez',
      subHeading: 'Citadel of Ricks',
      onClick: jest.fn(),
    }
  })

  test('should render heading, subHeading and image', () => {
    const { getByText, getByAltText } = render(<Card {...expectedProps} />)

    const heading = getByText(expectedProps.heading)
    const subHeading = getByText(expectedProps.subHeading)
    const image = getByAltText(expectedProps.heading)

    expect(heading).toBeVisible()
    expect(subHeading).toBeVisible()
    expect(image).toBeVisible()
  })
})
