import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
  'user-read-email',
  'user-library-read',
  'playlist-read-collaborative',
  'playlist-read-private',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'streaming',
  'user-read-playback-position',
  'user-top-read',
  'user-read-recently-played',
].join(',')

const params = { scope: scopes }

const queryString = new URLSearchParams(params)

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryString.toString()}`

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
})

export default spotifyApi

export { LOGIN_URL }
