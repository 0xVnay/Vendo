import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Track from '../../components/Track'
import useSpotify from '../../hooks/useSpotify'

const Playlist = () => {
  const spotifyApi = useSpotify()
  const router = useRouter()
  const [playlist, setPlaylist] = useState(null)
  const { playlist: playlistId } = router.query

  useEffect(() => {
    spotifyApi.getPlaylist(playlistId).then((data) => {
      setPlaylist(data.body)
    })
  }, [])

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
            src={playlist?.images?.[0]?.url}
            alt={playlist?.name}
          />
          <div>
            <p>PLAYLIST</p>
            <h1 className="text-2xl font-bold md:text-3xl xl:text-5xl">
              {playlist?.name}
            </h1>
          </div>
        </section>
        <div className="flex flex-col space-y-1 px-8 pb-28 text-white ">
          {playlist?.tracks?.items?.map((track, i) => (
            <Track key={track.track.id} track={track} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Playlist
