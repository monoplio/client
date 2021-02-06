import { useMutation, gql } from '@apollo/client'

const JOIN_GAME = gql`
  mutation($username: String!, $gameId: ID!){
    joinGame(username: $username, gameId: $gameId){
      balance
      id
      isPlaying
      lastRoll1
      lastRoll2
      username
      x
      y
    }
  }
`

const useJoinGameMutation = (options) => useMutation(JOIN_GAME, options)
export { useJoinGameMutation, JOIN_GAME }
