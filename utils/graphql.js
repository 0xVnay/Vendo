import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://rickandmortyapi.com/graphql/',
  cache: new InMemoryCache(),
})

export const getCharacters = async () => {
  const { data } = await client.query({
    query: gql`
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
    `,
  })

  return {
    characters: data.characters.results,
  }
}
