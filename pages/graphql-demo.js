import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import Card from '../components/Card'
import { getCharacters } from '../utils/graphql'
import { CharactersContext } from '../context/Characters'

const CharactersList = ({ characters }) => {
  const router = useRouter()
  const { updateCharacters } = useContext(CharactersContext)

  useEffect(() => {
    updateCharacters(characters)
  }, [])

  return (
    <div className="h-screen overflow-hidden bg-[#010101] text-white">
      <Head>
        <title>Vendo Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative mx-auto h-screen max-w-screen-lg flex-grow overflow-y-scroll scrollbar-hide">
        <section className="flex h-60 items-end space-x-7 bg-gradient-to-b from-red-500 to-[#010101] p-8 text-white">
          <div>
            <p>VENDO</p>
            <h1 className="text-2xl font-bold md:text-3xl xl:text-5xl">
              Graphql Demo
            </h1>
          </div>
        </section>
        <div
          data-testid="characters-container"
          className="grid grid-cols-2 gap-x-6 gap-y-10 p-8 md:grid-cols-3 lg:grid-cols-4 "
        >
          {characters.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              onClick={() => router.push(`/character/${character.id}`)}
              imageUrl={character?.image}
              heading={character.name}
              subHeading={character.location.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CharactersList

export async function getStaticProps() {
  const { characters } = await getCharacters()

  return {
    props: {
      characters,
    },
  }
}
