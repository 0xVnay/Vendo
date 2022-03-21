import { SessionProvider } from 'next-auth/react'
import { CharactersProvider } from '../context/Characters'

export const MockProviders = ({ children }) => {
  return (
    <SessionProvider
      session={{
        user: {
          name: 'Vinay',
          email: 'vinayleokumar@gmail.com',
          image: 'test-image',
          accessToken: 'test',
          refreshToken: 'test',
          userName: 'test',
        },
        expires: '2022-04-19T12:24:44.187Z',
      }}
    >
      <CharactersProvider>{children}</CharactersProvider>
    </SessionProvider>
  )
}
