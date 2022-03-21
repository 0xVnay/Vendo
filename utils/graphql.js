import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client'
import fetch from 'cross-fetch'

const client = new ApolloClient({
  link: new createHttpLink({
    uri: 'http://rickandmortyapi.com/graphql/',
    fetch,
  }),
  cache: new InMemoryCache(),
})

const GET_CHARACTERS_QUERY = gql`
  query {
    characters(page: 1) {
      info {
        count
        pages
      }
      results {
        name
        id
        location {
          id
          name
        }
        episode {
          id
          name
          episode
          air_date
        }
        image
      }
    }
  }
`

export const getCharacters = async () => {
  const { data } = await client.query({
    query: GET_CHARACTERS_QUERY,
  })

  return {
    characters: data.characters.results,
  }
}
