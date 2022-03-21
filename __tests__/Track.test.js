const { render } = require('@testing-library/react')
import Track from '@/components/Track'
import { formatMillsToMinsAndSecs } from '@/utils/time'

describe('Playlist Track', () => {
  let expectedProps

  beforeEach(() => {
    expectedProps = {
      index: 0,
      track: {
        track: {
          name: 'Heat Waves',
          artists: [
            {
              name: 'Glass Animals',
            },
          ],
          duration_ms: 238805,
          album: {
            name: 'Dreamland (+ Bonus Levels)',
            images: [
              {
                url: 'https://i.scdn.co/image/ab67616d0000b2739e495fb707973f3390850eea',
              },
            ],
          },
        },
      },
    }
  })

  test('should render track name, image, artist, album and duration', () => {
    const { getByText, getByAltText } = render(<Track {...expectedProps} />)

    const {
      track: { track },
    } = expectedProps

    const name = getByText(track.name)
    const image = getByAltText(track.name)
    const artist = getByText(track.artists[0].name)
    const album = getByText(track.album.name)
    const duration = getByText(formatMillsToMinsAndSecs(track.duration_ms))

    expect(name).toBeVisible()
    expect(image).toBeVisible()
    expect(artist).toBeVisible()
    expect(album).toBeVisible()
    expect(duration).toBeVisible()
  })
})
