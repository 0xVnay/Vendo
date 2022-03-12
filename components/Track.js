import { formatMillsToMinsAndSecs } from '../utils/time'

const Track = ({ index, track }) => {
  return (
    <div className="cursor:pointer grid grid-cols-2 rounded-md py-4 px-5 text-[#999] hover:bg-[#1e1e1e]">
      <div className="flex items-center space-x-4">
        <p>{index + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track.album.images[0].url}
          alt={track.track.name}
        />
        <div>
          <p className="w-36 truncate text-white lg:w-64">{track.track.name}</p>
          <p className="w-40">{track.track.artists[0].name}</p>
        </div>
      </div>

      <div className="ml-auto flex items-center justify-between md:ml-0">
        <p className="hidden w-40 md:inline">{track.track.album.name}</p>
        <p>{formatMillsToMinsAndSecs(track.track.duration_ms)}</p>
      </div>
    </div>
  )
}

export default Track
