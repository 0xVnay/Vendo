import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import Track from '../../components/Track'
import { CharactersContext } from '../../context/Characters'

const Character = () => {
  const router = useRouter()
  const { character: characterId } = router.query
  const { characters } = useContext(CharactersContext)
  const character = characters[characterId] || null

  return (
    <div className="h-screen overflow-hidden bg-[#010101] text-white">
      <Head>
        <title>Vendo Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative mx-auto h-screen max-w-screen-lg flex-grow overflow-y-scroll scrollbar-hide">
        <section
          className={`flex h-80 items-end space-x-7 bg-gradient-to-b from-green-500 to-black p-8 text-white`}
        >
          <img
            className="shadow-2xla h-44 w-44"
            src={character?.image}
            alt={character?.name}
          />
          <div>
            <p>CHARACTER EPISODES</p>
            <h1 className="text-2xl font-bold md:text-3xl xl:text-5xl">
              {character?.name}
            </h1>
          </div>
        </section>
        <div className="flex flex-col space-y-1 px-8 pb-28 text-white ">
          {character?.episode?.map((episode, index) => (
            <div className="cursor:pointer flex justify-between  rounded-md py-4 px-5 text-[#999] hover:bg-[#1e1e1e]">
              <div className="flex items-center space-x-4">
                <p>{index + 1}</p>
                <p className="w-36 truncate text-white lg:w-64">
                  {episode.name}
                </p>
              </div>
              <p className="w-40">{episode.episode}</p>
              <p className="w-40">{episode.air_date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Character
