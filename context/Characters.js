import React, { createContext, useState } from 'react'

const initialState = {
  characters: {},
}

export const CharactersContext = createContext(initialState)

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState({})

  const updateCharacters = (data) => {
    const charactersObj = data.reduce((curr, character) => {
      curr[character.id] = character
      return curr
    }, {})

    setCharacters(charactersObj)
  }

  return (
    <CharactersContext.Provider
      value={{
        characters,
        updateCharacters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  )
}
