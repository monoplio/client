import { useMutation, gql } from '@apollo/client'

const START_GAME = gql`
  mutation($gameId: ID!){
    startGame(gameId: $gameId){
      id
    }
  }
`

const useStartGameMutation = (options) => useMutation(START_GAME, options)
export { useStartGameMutation, START_GAME }
