import { getProviders, signIn } from 'next-auth/react'

const Login = ({ providers }) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
      <div className="mb-10 w-40">
        <img
          className="max-w-full"
          src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
          alt=""
        />
      </div>

      <button
        onClick={() => signIn(providers.spotify.id, { callbackUrl: '/' })}
        className="pv-3 rounded-lg bg-[#18D860] px-5 py-3 text-white"
      >
        Login with Spotify
      </button>
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
