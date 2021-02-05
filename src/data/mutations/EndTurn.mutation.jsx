import { useMutation, gql } from '@apollo/client'

const END_TURN = gql`
  mutation($playerId: ID!){
    endTurn(playerId: $playerId){
      id
    }
  }
`

const useEndTurnMutation = (options) => useMutation(END_TURN, options)
export { useEndTurnMutation, END_TURN }
