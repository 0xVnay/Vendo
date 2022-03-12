import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { CharactersProvider } from '../context/Characters'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <CharactersProvider>
        <Component {...pageProps} />
      </CharactersProvider>
    </SessionProvider>
  )
}

export default MyApp
