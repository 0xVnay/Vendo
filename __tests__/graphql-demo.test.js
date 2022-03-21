import { render, screen } from '@testing-library/react'
import CharactersList from '@/pages/graphql-demo'
import { MockProviders } from '@/utils/test-utils.js'
import { getCharacters } from '../utils/graphql'

describe('Graphql demo (Rick & Morty)', () => {
  let characters

  beforeEach(async () => {
    const response = await getCharacters()
    characters = response.characters
  })

  test('should fetch characters data', () => {
    expect(characters).not.toBeUndefined()
    expect(characters.length).toBeGreaterThan(0)
  })

  test('should renders characters list with name, image', () => {
    const { getByText, getByAltText } = render(
      <MockProviders>
        <CharactersList characters={characters} />
      </MockProviders>
    )

    const charactersDOMList = []

    characters.forEach((character) => {
      charactersDOMList.push({
        name: getByText(character.name),
        image: getByAltText(character.name),
      })
    })

    charactersDOMList.forEach((character) => {
      expect(character.name).toBeVisible()
      expect(character.image).toBeVisible()
    })
  })
})
