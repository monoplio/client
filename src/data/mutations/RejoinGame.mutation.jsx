import { useMutation, gql } from '@apollo/client'

const REJOIN_GAME = gql`
  mutation($username: String!, $gameId: ID!){
    rejoinGame(username: $username, gameId: $gameId){
      balance
      id
      isPlaying
      lastRoll1
      lastRoll2
      color
      username
      x
      y
    }
  }
`

const useRejoinGameMutation = (options) => useMutation(REJOIN_GAME, options)
export { useRejoinGameMutation, REJOIN_GAME }
