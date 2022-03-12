import { getSession, signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import useSpotify from '../hooks/useSpotify'
import { useRouter } from 'next/router'
import Card from '../components/Card'

const Home = () => {
  const spotifyApi = useSpotify()
  const router = useRouter()
  const { data: session } = useSession()
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items)
      })
    }
  }, [session, spotifyApi])

  return (
    <div className="h-screen overflow-hidden bg-[#010101] text-white">
      <Head>
        <title>Vendo Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative mx-auto h-screen max-w-screen-lg flex-grow overflow-y-scroll scrollbar-hide">
        <header className="absolute top-5 right-8 flex space-x-6">
          <div
            onClick={() => router.push(`/graphql-demo`)}
            className="flex cursor-pointer items-center space-x-3 rounded-full bg-white p-1 pr-2 text-black opacity-90 hover:opacity-80"
          >
            <h2 className='font-medium'>Go to Graphql Demo</h2>
          </div>
          <div
            onClick={signOut}
            className="flex cursor-pointer items-center space-x-3 rounded-full bg-white p-1 pr-2 text-black opacity-90 hover:opacity-80"
          >
            <img
              className="w10 h-10 rounded-full"
              src={session?.user.image}
              alt=""
            />
            <h2>{session?.user.name}</h2>
          </div>
        </header>

        <section className="flex h-60 items-end space-x-7 bg-gradient-to-b from-red-500 to-[#010101] p-8 text-white">
          <div>
            <p>VENDO</p>
            <h1 className="text-2xl font-bold md:text-3xl xl:text-5xl">
              Assignment Task
            </h1>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 p-8 md:grid-cols-3 lg:grid-cols-4 ">
          {playlists.map((playlist) => (
            <Card
              key={playlist.id}
              onClick={() => router.push(`/playlist/${playlist.id}`)}
              imageUrl={playlist?.images?.[0]?.url}
              heading={playlist.name}
              subHeading={`by ${playlist?.owner?.display_name}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
